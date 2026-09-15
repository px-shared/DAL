// Transport security for the RDS connections, in one place because both
// connections need to agree about it.
//
// Both files used to say `ssl: { rejectUnauthorized: false }`: encrypted, but
// accepting whatever certificate the other end presents, so anything able to
// answer on the connection path could read and rewrite every query. The
// databases are reachable from the public internet, which is what makes that
// worth fixing rather than noting.
//
// With DATABASE_SSL_CA set to the Amazon RDS regional bundle (PEM, from
// https://truststore.pki.rds.amazonaws.com/<region>/<region>-bundle.pem) the
// server certificate chain AND the hostname are verified. Without it the
// connection stays encrypted but unverified and says so on every cold start,
// so a variable that never reached one environment degrades loudly instead of
// taking production down. `rds.force_ssl` on the instance is what stops a
// cleartext regression; this is what stops an impersonated server.
let warned = false;

export const databaseSsl = () => {
  const ca = process.env.DATABASE_SSL_CA;

  if (ca) return { rejectUnauthorized: true, ca };

  if (!warned) {
    warned = true;
    console.error(
      'DATABASE_SSL_CA is not set: connecting with TLS but without verifying the server certificate'
    );
  }

  return { rejectUnauthorized: false };
};

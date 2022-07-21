import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1645438090117 implements MigrationInterface {
  name = 'initial1645438090117';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "domain" ("id" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "PK_27e3ec3ea0ae02c8c5bceab3ba9" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "feedback" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, "route" character varying, "sentiment" character varying, "category" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "userId" integer, CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE INDEX "route-idx" ON "feedback" ("route") `
    );
    await queryRunner.query(
      `CREATE TABLE "organisation" ("id" character varying NOT NULL, "companyEmail" character varying NOT NULL, "companyName" character varying, "companySize" character varying, "industry" character varying, "website" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_4fa9a6f4b0a8a5383060111d1ef" UNIQUE ("companyEmail"), CONSTRAINT "PK_c725ae234ef1b74cce43d2d00c1" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "pixel" ("id" SERIAL NOT NULL, "provider" character varying NOT NULL, "identifier" character varying NOT NULL, "reference" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "PK_e5500ed5568dd675dd36919528d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "plan" ("providerId" character varying(256) NOT NULL, "providerProductId" character varying(256) NOT NULL, "product" character varying(256) NOT NULL, "interval" character varying(64) NOT NULL, "metadata" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_deeb10df332bf49dc1e0fb4aa35" PRIMARY KEY ("providerId"))`
    );
    await queryRunner.query(
      `CREATE TABLE "preferences" ("id" SERIAL NOT NULL, "compactUserInterface" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "userId" integer, CONSTRAINT "REL_eb2de5fbaa61832e982f53d971" UNIQUE ("userId"), CONSTRAINT "PK_17f8855e4145192bbabd91a51be" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "session" ("id" SERIAL NOT NULL, "c_ip" character varying, "sc_status" character varying, "cs_method" character varying, "cs_protocol" character varying, "cs_host" character varying, "cs_uri_stem" character varying, "cs_bytes" character varying, "x_edge_location" character varying, "x_host_header" character varying, "cs_protocol_version" character varying, "c_ip_version" character varying, "cs_user_agent" character varying, "cs_referer" character varying, "cs_cookie" character varying, "cs_uri_query" character varying, "x_edge_response_result_type" character varying, "c_country" character varying, "deviceType" character varying, "OSName" character varying, "OSVersion" character varying, "browserName" character varying, "browserVersion" character varying, "performedAt" TIMESTAMP WITH TIME ZONE, "cfid" character varying, "medium" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "shortId" character varying, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`CREATE INDEX "IDX_IP" ON "session" ("c_ip") `);
    await queryRunner.query(
      `CREATE INDEX "IDX_URL" ON "session" ("x_host_header", "cs_uri_stem") `
    );
    await queryRunner.query(
      `CREATE TABLE "settings" ("id" SERIAL NOT NULL, "updates" boolean NOT NULL DEFAULT true, "alerts" boolean NOT NULL DEFAULT false, "weeklyReport" boolean NOT NULL DEFAULT true, "safeguard" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "REL_75cb3de70bee8dd51253826467" UNIQUE ("organisationId"), CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "short" ("id" character varying NOT NULL, "route" character varying(32), "active" boolean NOT NULL DEFAULT true, "destination" character varying NOT NULL, "deep" boolean NOT NULL DEFAULT true, "meta" text, "clicks" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "domainId" character varying, "organisationId" character varying, CONSTRAINT "PK_87ec3401b7e78c5703f3ebd6ce6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`CREATE INDEX "IDX_ROUTE" ON "short" ("route") `);
    await queryRunner.query(
      `CREATE TABLE "subscription" ("providerId" character varying(256) NOT NULL, "providerItemId" character varying(256) NOT NULL, "subscriptionCycleBegin" TIMESTAMP WITH TIME ZONE NOT NULL, "subscriptionCycleEnd" TIMESTAMP WITH TIME ZONE NOT NULL, "status" character varying(64) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "planProviderId" character varying(256), CONSTRAINT "UQ_9c7e1c27d0e3512641191e21f68" UNIQUE ("providerItemId"), CONSTRAINT "REL_ad0626565f11a0d3367a7a6268" UNIQUE ("organisationId"), CONSTRAINT "PK_cdb1aedcaed30da7ce885d47b5b" PRIMARY KEY ("providerId"))`
    );
    await queryRunner.query(
      `CREATE TABLE "tag" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "usage" ("id" SERIAL NOT NULL, "domains" integer NOT NULL DEFAULT '0', "members" integer NOT NULL DEFAULT '0', "shorts" integer NOT NULL DEFAULT '0', "contacts" integer NOT NULL DEFAULT '0', "feedback" integer NOT NULL DEFAULT '0', "overage" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "REL_7821d1cb05eaf7763a56f7b42f" UNIQUE ("organisationId"), CONSTRAINT "PK_7bc33e71ab6c3b71eac72950b44" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying, "role" character varying NOT NULL DEFAULT 'user', "email" character varying NOT NULL, "password" character varying NOT NULL, "ipAddress" character varying, "verified" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "verification" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expires" TIMESTAMP WITH TIME ZONE NOT NULL, "changes" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "userId" integer, CONSTRAINT "UQ_9f6123129312c1eb442bec455d6" UNIQUE ("token"), CONSTRAINT "PK_f7e3a90ca384e71d6e2e93bb340" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "short_tags_tag" ("shortId" character varying NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_1a332958be98e85cc71cdd3afe6" PRIMARY KEY ("shortId", "tagId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_86384a29336d6d85e5f19fa6e1" ON "short_tags_tag" ("shortId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_81942e91a669aaf4a1dd482795" ON "short_tags_tag" ("tagId") `
    );
    await queryRunner.query(
      `CREATE TABLE "short_pixels_pixel" ("shortId" character varying NOT NULL, "pixelId" integer NOT NULL, CONSTRAINT "PK_e4f9db6701419765be520d34889" PRIMARY KEY ("shortId", "pixelId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f96a249ec97547c9b3754a81f7" ON "short_pixels_pixel" ("shortId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dcda29277040d1a61b07e0380f" ON "short_pixels_pixel" ("pixelId") `
    );
    await queryRunner.query(
      `ALTER TABLE "domain" ADD CONSTRAINT "FK_e4461042fc29e41e7877b8c41c7" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "feedback" ADD CONSTRAINT "FK_4a39e6ac0cecdf18307a365cf3c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "pixel" ADD CONSTRAINT "FK_1ae3420aa0e1f0617d90e88e2f5" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "preferences" ADD CONSTRAINT "FK_eb2de5fbaa61832e982f53d9716" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD CONSTRAINT "FK_5b9b2bc94eef80656b06ebdeb05" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "settings" ADD CONSTRAINT "FK_75cb3de70bee8dd51253826467a" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "short" ADD CONSTRAINT "FK_bdbf00fb367e690239187e0b13a" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "short" ADD CONSTRAINT "FK_727cb9a0c79324b5b9de3667939" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "subscription" ADD CONSTRAINT "FK_ad0626565f11a0d3367a7a6268e" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "subscription" ADD CONSTRAINT "FK_504dbce6659d006273bc949b61b" FOREIGN KEY ("planProviderId") REFERENCES "plan"("providerId") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "tag" ADD CONSTRAINT "FK_e3ae4c9b50f7ac135031a09de87" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "usage" ADD CONSTRAINT "FK_7821d1cb05eaf7763a56f7b42f4" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_642763a1acbc9672d38429ea62a" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "verification" ADD CONSTRAINT "FK_8300048608d8721aea27747b07a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "short_tags_tag" ADD CONSTRAINT "FK_86384a29336d6d85e5f19fa6e1d" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "short_tags_tag" ADD CONSTRAINT "FK_81942e91a669aaf4a1dd4827954" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "short_pixels_pixel" ADD CONSTRAINT "FK_f96a249ec97547c9b3754a81f79" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "short_pixels_pixel" ADD CONSTRAINT "FK_dcda29277040d1a61b07e0380f1" FOREIGN KEY ("pixelId") REFERENCES "pixel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short_pixels_pixel" DROP CONSTRAINT "FK_dcda29277040d1a61b07e0380f1"`
    );
    await queryRunner.query(
      `ALTER TABLE "short_pixels_pixel" DROP CONSTRAINT "FK_f96a249ec97547c9b3754a81f79"`
    );
    await queryRunner.query(
      `ALTER TABLE "short_tags_tag" DROP CONSTRAINT "FK_81942e91a669aaf4a1dd4827954"`
    );
    await queryRunner.query(
      `ALTER TABLE "short_tags_tag" DROP CONSTRAINT "FK_86384a29336d6d85e5f19fa6e1d"`
    );
    await queryRunner.query(
      `ALTER TABLE "verification" DROP CONSTRAINT "FK_8300048608d8721aea27747b07a"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_642763a1acbc9672d38429ea62a"`
    );
    await queryRunner.query(
      `ALTER TABLE "usage" DROP CONSTRAINT "FK_7821d1cb05eaf7763a56f7b42f4"`
    );
    await queryRunner.query(
      `ALTER TABLE "tag" DROP CONSTRAINT "FK_e3ae4c9b50f7ac135031a09de87"`
    );
    await queryRunner.query(
      `ALTER TABLE "subscription" DROP CONSTRAINT "FK_504dbce6659d006273bc949b61b"`
    );
    await queryRunner.query(
      `ALTER TABLE "subscription" DROP CONSTRAINT "FK_ad0626565f11a0d3367a7a6268e"`
    );
    await queryRunner.query(
      `ALTER TABLE "short" DROP CONSTRAINT "FK_727cb9a0c79324b5b9de3667939"`
    );
    await queryRunner.query(
      `ALTER TABLE "short" DROP CONSTRAINT "FK_bdbf00fb367e690239187e0b13a"`
    );
    await queryRunner.query(
      `ALTER TABLE "settings" DROP CONSTRAINT "FK_75cb3de70bee8dd51253826467a"`
    );
    await queryRunner.query(
      `ALTER TABLE "session" DROP CONSTRAINT "FK_5b9b2bc94eef80656b06ebdeb05"`
    );
    await queryRunner.query(
      `ALTER TABLE "preferences" DROP CONSTRAINT "FK_eb2de5fbaa61832e982f53d9716"`
    );
    await queryRunner.query(
      `ALTER TABLE "pixel" DROP CONSTRAINT "FK_1ae3420aa0e1f0617d90e88e2f5"`
    );
    await queryRunner.query(
      `ALTER TABLE "feedback" DROP CONSTRAINT "FK_4a39e6ac0cecdf18307a365cf3c"`
    );
    await queryRunner.query(
      `ALTER TABLE "domain" DROP CONSTRAINT "FK_e4461042fc29e41e7877b8c41c7"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_dcda29277040d1a61b07e0380f"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f96a249ec97547c9b3754a81f7"`
    );
    await queryRunner.query(`DROP TABLE "short_pixels_pixel"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_81942e91a669aaf4a1dd482795"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_86384a29336d6d85e5f19fa6e1"`
    );
    await queryRunner.query(`DROP TABLE "short_tags_tag"`);
    await queryRunner.query(`DROP TABLE "verification"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "usage"`);
    await queryRunner.query(`DROP TABLE "tag"`);
    await queryRunner.query(`DROP TABLE "subscription"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_ROUTE"`);
    await queryRunner.query(`DROP TABLE "short"`);
    await queryRunner.query(`DROP TABLE "settings"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_URL"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_IP"`);
    await queryRunner.query(`DROP TABLE "session"`);
    await queryRunner.query(`DROP TABLE "preferences"`);
    await queryRunner.query(`DROP TABLE "plan"`);
    await queryRunner.query(`DROP TABLE "pixel"`);
    await queryRunner.query(`DROP TABLE "organisation"`);
    await queryRunner.query(`DROP INDEX "public"."route-idx"`);
    await queryRunner.query(`DROP TABLE "feedback"`);
    await queryRunner.query(`DROP TABLE "domain"`);
  }
}

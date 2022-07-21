import { MigrationInterface, QueryRunner } from 'typeorm';

export class addIndexes1656083069871 implements MigrationInterface {
  name = 'addIndexes1656083069871';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_URL"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_CFID"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_ROUTE"`);
    await queryRunner.query(
      `CREATE INDEX "IDX_performedAt" ON "session" ("performedAt") `
    );
    await queryRunner.query(`CREATE INDEX "IDX_cfid" ON "session" ("cfid") `);
    await queryRunner.query(
      `CREATE INDEX "IDX_short" ON "session" ("shortId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_user" ON "short" ("userId", "organisationId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_organisation" ON "short" ("organisationId") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_organisation"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_user"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_short"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_cfid"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_performedAt"`);
    await queryRunner.query(`CREATE INDEX "IDX_ROUTE" ON "short" ("route") `);
    await queryRunner.query(`CREATE INDEX "IDX_CFID" ON "session" ("cfid") `);
    await queryRunner.query(
      `CREATE INDEX "IDX_URL" ON "session" ("cs_uri_stem", "x_host_header") `
    );
  }
}

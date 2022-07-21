import { MigrationInterface, QueryRunner } from 'typeorm';

export class addCsHostIDX1656594954790 implements MigrationInterface {
  name = 'addCsHostIDX1656594954790';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_cs_host" ON "session" ("cs_host") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_cs_host"`);
  }
}

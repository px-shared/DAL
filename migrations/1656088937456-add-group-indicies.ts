import { MigrationInterface, QueryRunner } from 'typeorm';

export class addGroupIndicies1656088937456 implements MigrationInterface {
  name = 'addGroupIndicies1656088937456';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_deviceType" ON "session" ("deviceType") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_browserName" ON "session" ("browserName") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_OSName" ON "session" ("OSName") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c_country" ON "session" ("c_country") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_source" ON "session" ("source") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_source"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_c_country"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_OSName"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_browserName"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_deviceType"`);
  }
}

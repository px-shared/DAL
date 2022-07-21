import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUtmIndicies1656089261925 implements MigrationInterface {
  name = 'addUtmIndicies1656089261925';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_utm_source" ON "session" ("utm_source") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_utm_medium" ON "session" ("utm_medium") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_utm_campaign" ON "session" ("utm_campaign") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_utm_campaign"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_utm_medium"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_utm_source"`);
  }
}

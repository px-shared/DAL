import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUid1656340786047 implements MigrationInterface {
  name = 'addUid1656340786047';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "session" ADD "uid" character varying(32)`
    );
    await queryRunner.query(`CREATE INDEX "IDX_uid" ON "session" ("uid") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_uid"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "uid"`);
  }
}

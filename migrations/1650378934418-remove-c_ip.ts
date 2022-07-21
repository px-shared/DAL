import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeCIp1650378934418 implements MigrationInterface {
  name = 'removeCIp1650378934418';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_IP"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "c_ip"`);
    await queryRunner.query(`CREATE INDEX "IDX_CFID" ON "session" ("cfid") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_CFID"`);
    await queryRunner.query(
      `ALTER TABLE "session" ADD "c_ip" character varying`
    );
    await queryRunner.query(`CREATE INDEX "IDX_IP" ON "session" ("c_ip") `);
  }
}

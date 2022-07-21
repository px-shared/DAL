import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateSettings1650443404677 implements MigrationInterface {
  name = 'updateSettings1650443404677';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "alerts"`);
    await queryRunner.query(
      `ALTER TABLE "settings" DROP COLUMN "weeklyReport"`
    );
    await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "updates"`);
    await queryRunner.query(
      `ALTER TABLE "preferences" ADD "updates" boolean NOT NULL DEFAULT true`
    );
    await queryRunner.query(
      `ALTER TABLE "preferences" ADD "alerts" boolean NOT NULL DEFAULT true`
    );
    await queryRunner.query(
      `ALTER TABLE "preferences" ADD "report" boolean NOT NULL DEFAULT true`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "preferences" DROP COLUMN "report"`);
    await queryRunner.query(`ALTER TABLE "preferences" DROP COLUMN "alerts"`);
    await queryRunner.query(`ALTER TABLE "preferences" DROP COLUMN "updates"`);
    await queryRunner.query(
      `ALTER TABLE "settings" ADD "updates" boolean NOT NULL DEFAULT true`
    );
    await queryRunner.query(
      `ALTER TABLE "settings" ADD "weeklyReport" boolean NOT NULL DEFAULT true`
    );
    await queryRunner.query(
      `ALTER TABLE "settings" ADD "alerts" boolean NOT NULL DEFAULT false`
    );
  }
}

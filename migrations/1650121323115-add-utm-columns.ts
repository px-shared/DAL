import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUtmColumns1650121323115 implements MigrationInterface {
  name = 'addUtmColumns1650121323115';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "session" ADD "utm_source" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "utm_medium" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "utm_content" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "utm_campaign" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "utm_term" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "source" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "source"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "utm_term"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "utm_campaign"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "utm_content"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "utm_medium"`);
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "utm_source"`);
  }
}

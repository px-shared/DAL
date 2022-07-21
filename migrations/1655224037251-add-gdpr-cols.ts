import { MigrationInterface, QueryRunner } from 'typeorm';

export class addGdprCols1655224037251 implements MigrationInterface {
  name = 'addGdprCols1655224037251';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" ADD "terms" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "gdpr_consent_status" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD "gdpr_consent_timestamp" TIMESTAMP WITH TIME ZONE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "session" DROP COLUMN "gdpr_consent_timestamp"`
    );
    await queryRunner.query(
      `ALTER TABLE "session" DROP COLUMN "gdpr_consent_status"`
    );
    await queryRunner.query(`ALTER TABLE "organisation" DROP COLUMN "terms"`);
  }
}

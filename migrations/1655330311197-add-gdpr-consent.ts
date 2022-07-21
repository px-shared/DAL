import { MigrationInterface, QueryRunner } from 'typeorm';

export class addGdprConsent1655330311197 implements MigrationInterface {
  name = 'addGdprConsent1655330311197';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "session" RENAME COLUMN "gdpr_consent_timestamp" TO "gdpr_consent_date"`
    );
    await queryRunner.query(
      `ALTER TABLE "short" ADD "consent" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "consent"`);
    await queryRunner.query(
      `ALTER TABLE "session" RENAME COLUMN "gdpr_consent_date" TO "gdpr_consent_timestamp"`
    );
  }
}

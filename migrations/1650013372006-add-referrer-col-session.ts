import { MigrationInterface, QueryRunner } from 'typeorm';

export class addReferrerColSession1650013372006 implements MigrationInterface {
  name = 'addReferrerColSession1650013372006';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "session" ADD "referrer" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "referrer"`);
  }
}

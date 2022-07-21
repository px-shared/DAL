import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeDeepLinks1653198569621 implements MigrationInterface {
  name = 'removeDeepLinks1653198569621';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "deep"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short" ADD "deep" boolean NOT NULL DEFAULT true`
    );
  }
}

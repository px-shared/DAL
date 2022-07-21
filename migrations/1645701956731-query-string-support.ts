import { MigrationInterface, QueryRunner } from 'typeorm';

export class queryStringSupport1645701956731 implements MigrationInterface {
  name = 'queryStringSupport1645701956731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short" ADD "title" character varying DEFAULT 'Redirect'`
    );
    await queryRunner.query(
      `ALTER TABLE "short" ADD "description" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "short" ADD "image" character varying`
    );
    await queryRunner.query(`ALTER TABLE "short" ADD "parameters" text`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "parameters"`);
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "image"`);
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "title"`);
  }
}

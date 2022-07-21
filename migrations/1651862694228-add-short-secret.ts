import { MigrationInterface, QueryRunner } from 'typeorm';

export class addShortSecret1651862694228 implements MigrationInterface {
  name = 'addShortSecret1651862694228';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short" ADD "secret" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "secret"`);
  }
}

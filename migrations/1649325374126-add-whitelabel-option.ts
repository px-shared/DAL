import { MigrationInterface, QueryRunner } from 'typeorm';

export class addWhitelabelOption1649325374126 implements MigrationInterface {
  name = 'addWhitelabelOption1649325374126';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" ADD "logo" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "organisation" DROP COLUMN "logo"`);
  }
}

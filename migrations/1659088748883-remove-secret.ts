import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeSecret1659088748883 implements MigrationInterface {
  name = 'removeSecret1659088748883';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "secret"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short" ADD "secret" character varying`
    );
  }
}

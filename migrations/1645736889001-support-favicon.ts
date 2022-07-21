import { MigrationInterface, QueryRunner } from 'typeorm';

export class supportFavicon1645736889001 implements MigrationInterface {
  name = 'supportFavicon1645736889001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short" ADD "favicon" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "favicon"`);
  }
}

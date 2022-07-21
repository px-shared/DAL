import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFavouriteCol1656263280913 implements MigrationInterface {
  name = 'addFavouriteCol1656263280913';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "short" ADD "favourite" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "favourite"`);
  }
}

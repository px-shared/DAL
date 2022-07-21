import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPromoCode1653902330292 implements MigrationInterface {
  name = 'addPromoCode1653902330292';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subscription" ADD "promotionCode" character varying(128)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subscription" DROP COLUMN "promotionCode"`
    );
  }
}

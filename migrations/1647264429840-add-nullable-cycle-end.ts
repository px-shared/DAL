import { MigrationInterface, QueryRunner } from 'typeorm';

export class addNullableCycleEnd1647264429840 implements MigrationInterface {
  name = 'addNullableCycleEnd1647264429840';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subscription" ALTER COLUMN "subscriptionCycleEnd" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subscription" ALTER COLUMN "subscriptionCycleEnd" SET NOT NULL`
    );
  }
}

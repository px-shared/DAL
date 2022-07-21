import { MigrationInterface, QueryRunner } from 'typeorm';

export class pixelsPlanLimit1645774654438 implements MigrationInterface {
  name = 'pixelsPlanLimit1645774654438';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usage" ADD "pixels" integer NOT NULL DEFAULT '0'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "pixels"`);
  }
}

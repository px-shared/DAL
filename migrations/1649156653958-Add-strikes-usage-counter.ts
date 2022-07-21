import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStrikesUsageCounter1649156653958 implements MigrationInterface {
  name = 'AddStrikesUsageCounter1649156653958';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "contacts"`);
    await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "feedback"`);
    await queryRunner.query(
      `ALTER TABLE "usage" ADD "strikes" integer NOT NULL DEFAULT '0'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "strikes"`);
    await queryRunner.query(
      `ALTER TABLE "usage" ADD "feedback" integer NOT NULL DEFAULT '0'`
    );
    await queryRunner.query(
      `ALTER TABLE "usage" ADD "contacts" integer NOT NULL DEFAULT '0'`
    );
  }
}

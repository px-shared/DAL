import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDeveloperColumn1659088989699 implements MigrationInterface {
  name = 'addDeveloperColumn1659088989699';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" ADD "developer" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" DROP COLUMN "developer"`
    );
  }
}

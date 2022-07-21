import { MigrationInterface, QueryRunner } from 'typeorm';

export class addCompanySupport1655230237349 implements MigrationInterface {
  name = 'addCompanySupport1655230237349';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" ADD "companySupport" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" DROP COLUMN "companySupport"`
    );
  }
}

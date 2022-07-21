import { MigrationInterface, QueryRunner } from 'typeorm';

export class addOrgCustomerId1646145075603 implements MigrationInterface {
  name = 'addOrgCustomerId1646145075603';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" ADD "paymentProviderCustomerId" character varying(256)`
    );
    await queryRunner.query(
      `ALTER TABLE "organisation" ADD CONSTRAINT "UQ_33c562996450a72d8632469f844" UNIQUE ("paymentProviderCustomerId")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organisation" DROP CONSTRAINT "UQ_33c562996450a72d8632469f844"`
    );
    await queryRunner.query(
      `ALTER TABLE "organisation" DROP COLUMN "paymentProviderCustomerId"`
    );
  }
}

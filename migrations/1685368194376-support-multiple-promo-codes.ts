import {MigrationInterface, QueryRunner} from "typeorm";

export class supportMultiplePromoCodes1685368194376 implements MigrationInterface {
    name = 'supportMultiplePromoCodes1685368194376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "promotionCode"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "promotionCode" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "promotionCode"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "promotionCode" character varying(128)`);
    }

}

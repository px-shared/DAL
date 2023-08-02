import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCheckout1690990096477 implements MigrationInterface {
    name = 'AddCheckout1690990096477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" ADD "checkout" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "checkout"`);
    }

}

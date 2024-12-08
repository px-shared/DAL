import {MigrationInterface, QueryRunner} from "typeorm";

export class addRedirectLogic1733666894129 implements MigrationInterface {
    name = 'addRedirectLogic1733666894129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "verification" ADD "redirect" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "verification" DROP COLUMN "redirect"`);
    }

}

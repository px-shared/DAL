import {MigrationInterface, QueryRunner} from "typeorm";

export class addErrorRedirectCols1674042087083 implements MigrationInterface {
    name = 'addErrorRedirectCols1674042087083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "redirect" character varying`);
        await queryRunner.query(`ALTER TABLE "short" ADD "error" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "error"`);
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "redirect"`);
    }

}

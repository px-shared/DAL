import {MigrationInterface, QueryRunner} from "typeorm";

export class addConditions1696609051238 implements MigrationInterface {
    name = 'addConditions1696609051238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "conditions" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "conditions"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addShortType1708681856220 implements MigrationInterface {
    name = 'addShortType1708681856220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "type" character varying NOT NULL DEFAULT 'URL'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "type"`);
    }

}

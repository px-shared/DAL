import {MigrationInterface, QueryRunner} from "typeorm";

export class addEntryMode1746376676147 implements MigrationInterface {
    name = 'addEntryMode1746376676147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" ADD "entryMode" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" DROP COLUMN "entryMode"`);
    }

}

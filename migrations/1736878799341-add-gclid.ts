import {MigrationInterface, QueryRunner} from "typeorm";

export class addGclid1736878799341 implements MigrationInterface {
    name = 'addGclid1736878799341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" ADD "gclid" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" DROP COLUMN "gclid"`);
    }

}

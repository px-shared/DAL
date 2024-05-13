import {MigrationInterface, QueryRunner} from "typeorm";

export class addAdminOrgsKpi1715597152933 implements MigrationInterface {
    name = 'addAdminOrgsKpi1715597152933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD "organisations" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "organisationsDelta" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "organisationsDelta"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "organisations"`);
    }

}

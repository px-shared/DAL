import {MigrationInterface, QueryRunner} from "typeorm";

export class addAdminUsersKpi1715177264177 implements MigrationInterface {
    name = 'addAdminUsersKpi1715177264177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD "users" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "usersDelta" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "usersDelta"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "users"`);
    }

}

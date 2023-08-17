import {MigrationInterface, QueryRunner} from "typeorm";

export class addFlags1692264261783 implements MigrationInterface {
    name = 'addFlags1692264261783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "result" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "flags" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "flags"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "result"`);
    }

}

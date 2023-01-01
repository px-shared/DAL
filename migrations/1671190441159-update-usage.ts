import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUsage1671190441159 implements MigrationInterface {
    name = 'updateUsage1671190441159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage" ADD "qrs" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "usage" ADD "events" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "events"`);
        await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "qrs"`);
    }

}

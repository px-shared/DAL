import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUsage1673052369354 implements MigrationInterface {
    name = 'updateUsage1673052369354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage" ADD "resetAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "resetAt"`);
    }

}

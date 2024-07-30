import {MigrationInterface, QueryRunner} from "typeorm";

export class addUsageHourlyMeta1722336352411 implements MigrationInterface {
    name = 'addUsageHourlyMeta1722336352411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage_hourly" ADD "meta" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage_hourly" DROP COLUMN "meta"`);
    }

}

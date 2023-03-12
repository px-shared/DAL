import {MigrationInterface, QueryRunner} from "typeorm";

export class addCityRegion1678626537366 implements MigrationInterface {
    name = 'addCityRegion1678626537366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" ADD "c_region" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "c_city" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "c_city"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "c_region"`);
    }

}

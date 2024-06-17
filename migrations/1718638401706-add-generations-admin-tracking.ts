import {MigrationInterface, QueryRunner} from "typeorm";

export class addGenerationsAdminTracking1718638401706 implements MigrationInterface {
    name = 'addGenerationsAdminTracking1718638401706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD "generations" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "generationsDelta" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "generationsDelta"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "generations"`);
    }

}

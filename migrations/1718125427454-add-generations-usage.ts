import {MigrationInterface, QueryRunner} from "typeorm";

export class addGenerationsUsage1718125427454 implements MigrationInterface {
    name = 'addGenerationsUsage1718125427454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage" ADD "generations" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "generations"`);
    }

}

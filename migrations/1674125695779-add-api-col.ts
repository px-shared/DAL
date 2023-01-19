import {MigrationInterface, QueryRunner} from "typeorm";

export class addApiCol1674125695779 implements MigrationInterface {
    name = 'addApiCol1674125695779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "api" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "api"`);
    }

}

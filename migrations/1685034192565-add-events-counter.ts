import {MigrationInterface, QueryRunner} from "typeorm";

export class addEventsCounter1685034192565 implements MigrationInterface {
    name = 'addEventsCounter1685034192565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "events" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "events"`);
    }

}

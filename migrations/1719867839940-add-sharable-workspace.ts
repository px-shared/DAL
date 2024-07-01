import {MigrationInterface, QueryRunner} from "typeorm";

export class addSharableWorkspace1719867839940 implements MigrationInterface {
    name = 'addSharableWorkspace1719867839940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace" ADD "shared" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace" DROP COLUMN "shared"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class orgAttribution1687871279006 implements MigrationInterface {
    name = 'orgAttribution1687871279006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" ADD "attribution" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" DROP COLUMN "attribution"`);
    }

}

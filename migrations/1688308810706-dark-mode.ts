import {MigrationInterface, QueryRunner} from "typeorm";

export class darkMode1688308810706 implements MigrationInterface {
    name = 'darkMode1688308810706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preferences" ADD "darkMode" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preferences" DROP COLUMN "darkMode"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addQrMode1737907136115 implements MigrationInterface {
    name = 'addQrMode1737907136115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" ADD "qrMode" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organisation" DROP COLUMN "qrMode"`);
    }

}

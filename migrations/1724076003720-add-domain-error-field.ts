import {MigrationInterface, QueryRunner} from "typeorm";

export class addDomainErrorField1724076003720 implements MigrationInterface {
    name = 'addDomainErrorField1724076003720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "domain" ADD "error" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "error"`);
    }

}

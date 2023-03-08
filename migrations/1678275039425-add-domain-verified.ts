import {MigrationInterface, QueryRunner} from "typeorm";

export class addDomainVerified1678275039425 implements MigrationInterface {
    name = 'addDomainVerified1678275039425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "domain" ADD "verified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "verified"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addInvalidateCol1675613604170 implements MigrationInterface {
    name = 'addInvalidateCol1675613604170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "invalidate" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "invalidate"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addExpiresNullable1658859468697 implements MigrationInterface {
    name = 'addExpiresNullable1658859468697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "access_token" ALTER COLUMN "expires" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "access_token" ALTER COLUMN "expires" SET NOT NULL`);
    }

}

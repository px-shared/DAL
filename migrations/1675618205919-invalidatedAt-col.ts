import {MigrationInterface, QueryRunner} from "typeorm";

export class invalidatedAtCol1675618205919 implements MigrationInterface {
    name = 'invalidatedAtCol1675618205919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "invalidate" TO "invalidatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "invalidatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "invalidatedAt" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "invalidatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "invalidatedAt" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "invalidatedAt" TO "invalidate"`);
    }

}

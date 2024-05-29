import {MigrationInterface, QueryRunner} from "typeorm";

export class addShortPublishDate1716993667176 implements MigrationInterface {
    name = 'addShortPublishDate1716993667176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "publishedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "publishedAt"`);
    }

}

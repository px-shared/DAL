import {MigrationInterface, QueryRunner} from "typeorm";

export class updateEvent21685096044098 implements MigrationInterface {
    name = 'updateEvent21685096044098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "performedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ADD "performedAt" bigint NOT NULL`);
    }

}

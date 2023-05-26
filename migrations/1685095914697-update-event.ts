import {MigrationInterface, QueryRunner} from "typeorm";

export class updateEvent1685095914697 implements MigrationInterface {
    name = 'updateEvent1685095914697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "priorDelay"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "cookies"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "path"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "uid"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "source" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ADD "referrer" character varying`);
        await queryRunner.query(`ALTER TABLE "event" ADD "meta" text`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "action"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "action" character varying(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "properties" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "cfid" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "cfid" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "properties" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "action"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "action" character varying(64) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "meta"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "referrer"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "source"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "uid" character varying(32)`);
        await queryRunner.query(`ALTER TABLE "event" ADD "path" character varying(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ADD "cookies" character varying(64) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ADD "priorDelay" bigint NOT NULL`);
    }

}

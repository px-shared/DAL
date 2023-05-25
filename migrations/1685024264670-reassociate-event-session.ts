import {MigrationInterface, QueryRunner} from "typeorm";

export class reassociateEventSession1685024264670 implements MigrationInterface {
    name = 'reassociateEventSession1685024264670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_8a2a80645e4464a5876d09fe1af"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "shortId"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "cfid" character varying`);
        await queryRunner.query(`ALTER TABLE "event" ADD "uid" character varying(32)`);
        await queryRunner.query(`ALTER TABLE "event" ADD "sessionId" integer`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_095e9a5da8755583ff4b0fb621d" FOREIGN KEY ("sessionId") REFERENCES "session"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_095e9a5da8755583ff4b0fb621d"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "sessionId"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "uid"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "cfid"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "shortId" character varying`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_8a2a80645e4464a5876d09fe1af" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

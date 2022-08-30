import {MigrationInterface, QueryRunner} from "typeorm";

export class reduceSessionFields1661818807795 implements MigrationInterface {
    name = 'reduceSessionFields1661818807795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_5b9b2bc94eef80656b06ebdeb05"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "cs_bytes"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "x_edge_location"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "x_host_header"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "cs_protocol_version"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "c_ip_version"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "cs_user_agent"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "cs_uri_query"`);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_5b9b2bc94eef80656b06ebdeb05" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_5b9b2bc94eef80656b06ebdeb05"`);
        await queryRunner.query(`ALTER TABLE "session" ADD "cs_uri_query" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "cs_user_agent" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "c_ip_version" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "cs_protocol_version" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "x_host_header" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "x_edge_location" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD "cs_bytes" character varying`);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_5b9b2bc94eef80656b06ebdeb05" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}

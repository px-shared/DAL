import {MigrationInterface, QueryRunner} from "typeorm";

export class addEvents1670324412833 implements MigrationInterface {
    name = 'addEvents1670324412833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "path" character varying(128) NOT NULL, "action" character varying(64) NOT NULL, "cookies" character varying(64) NOT NULL, "performedAt" bigint NOT NULL, "priorDelay" bigint NOT NULL, "properties" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "shortId" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_8a2a80645e4464a5876d09fe1af" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_8a2a80645e4464a5876d09fe1af"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}

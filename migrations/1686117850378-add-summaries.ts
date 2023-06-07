import {MigrationInterface, QueryRunner} from "typeorm";

export class addSummaries1686117850378 implements MigrationInterface {
    name = 'addSummaries1686117850378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "summary" ("id" SERIAL NOT NULL, "sessions" integer NOT NULL DEFAULT '0', "domains" integer NOT NULL DEFAULT '0', "sites" integer NOT NULL DEFAULT '0', "tags" integer NOT NULL DEFAULT '0', "shorts" integer NOT NULL DEFAULT '0', "pixels" integer NOT NULL DEFAULT '0', "qrs" integer NOT NULL DEFAULT '0', "events" integer NOT NULL DEFAULT '0', "tokens" integer NOT NULL DEFAULT '0', "assets" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "PK_406f24bdfa7fbb014243f5f8571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usage" ADD "sessions" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "summary" ADD CONSTRAINT "FK_5023b277ec4a878f5cfb10a1f93" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "summary" DROP CONSTRAINT "FK_5023b277ec4a878f5cfb10a1f93"`);
        await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "sessions"`);
        await queryRunner.query(`DROP TABLE "summary"`);
    }

}

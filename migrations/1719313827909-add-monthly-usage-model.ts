import {MigrationInterface, QueryRunner} from "typeorm";

export class addMonthlyUsageModel1719313827909 implements MigrationInterface {
    name = 'addMonthlyUsageModel1719313827909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usage_period" ("id" SERIAL NOT NULL, "sessions" integer NOT NULL DEFAULT '0', "domains" integer NOT NULL DEFAULT '0', "sites" integer NOT NULL DEFAULT '0', "members" integer NOT NULL DEFAULT '0', "shorts" integer NOT NULL DEFAULT '0', "pixels" integer NOT NULL DEFAULT '0', "qrs" integer NOT NULL DEFAULT '0', "events" integer NOT NULL DEFAULT '0', "workspaces" integer NOT NULL DEFAULT '0', "overage" integer NOT NULL DEFAULT '0', "strikes" integer NOT NULL DEFAULT '0', "tokens" integer NOT NULL DEFAULT '0', "assets" integer NOT NULL DEFAULT '0', "generations" integer NOT NULL DEFAULT '0', "resetAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "REL_3bf4397df7637807b73fc26bfd" UNIQUE ("organisationId"), CONSTRAINT "PK_031edb0d7e34c5a6f92f8d1c772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usage_period" ADD CONSTRAINT "FK_3bf4397df7637807b73fc26bfd0" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage_period" DROP CONSTRAINT "FK_3bf4397df7637807b73fc26bfd0"`);
        await queryRunner.query(`DROP TABLE "usage_period"`);
    }

}

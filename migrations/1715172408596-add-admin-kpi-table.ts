import {MigrationInterface, QueryRunner} from "typeorm";

export class addAdminKpiTable1715172408596 implements MigrationInterface {
    name = 'addAdminKpiTable1715172408596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "sessions" integer NOT NULL DEFAULT '0', "domains" integer NOT NULL DEFAULT '0', "sites" integer NOT NULL DEFAULT '0', "members" integer NOT NULL DEFAULT '0', "shorts" integer NOT NULL DEFAULT '0', "pixels" integer NOT NULL DEFAULT '0', "qrs" integer NOT NULL DEFAULT '0', "events" integer NOT NULL DEFAULT '0', "workspaces" integer NOT NULL DEFAULT '0', "overage" integer NOT NULL DEFAULT '0', "strikes" integer NOT NULL DEFAULT '0', "tokens" integer NOT NULL DEFAULT '0', "assets" integer NOT NULL DEFAULT '0', "sessionsDelta" integer NOT NULL DEFAULT '0', "domainsDelta" integer NOT NULL DEFAULT '0', "sitesDelta" integer NOT NULL DEFAULT '0', "membersDelta" integer NOT NULL DEFAULT '0', "shortsDelta" integer NOT NULL DEFAULT '0', "pixelsDelta" integer NOT NULL DEFAULT '0', "qrsDelta" integer NOT NULL DEFAULT '0', "eventsDelta" integer NOT NULL DEFAULT '0', "workspacesDelta" integer NOT NULL DEFAULT '0', "overageDelta" integer NOT NULL DEFAULT '0', "strikesDelta" integer NOT NULL DEFAULT '0', "tokensDelta" integer NOT NULL DEFAULT '0', "assetsDelta" integer NOT NULL DEFAULT '0', "reportedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}

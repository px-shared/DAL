import {MigrationInterface, QueryRunner} from "typeorm";

export class addUsageHourlyModel1722257071834 implements MigrationInterface {
    name = 'addUsageHourlyModel1722257071834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usage_hourly" ("id" SERIAL NOT NULL, "hour0" integer NOT NULL DEFAULT '0', "hour1" integer NOT NULL DEFAULT '0', "hour2" integer NOT NULL DEFAULT '0', "hour3" integer NOT NULL DEFAULT '0', "hour4" integer NOT NULL DEFAULT '0', "hour5" integer NOT NULL DEFAULT '0', "hour6" integer NOT NULL DEFAULT '0', "hour7" integer NOT NULL DEFAULT '0', "hour8" integer NOT NULL DEFAULT '0', "hour9" integer NOT NULL DEFAULT '0', "hour10" integer NOT NULL DEFAULT '0', "hour11" integer NOT NULL DEFAULT '0', "hour12" integer NOT NULL DEFAULT '0', "hour13" integer NOT NULL DEFAULT '0', "hour14" integer NOT NULL DEFAULT '0', "hour15" integer NOT NULL DEFAULT '0', "hour16" integer NOT NULL DEFAULT '0', "hour17" integer NOT NULL DEFAULT '0', "hour18" integer NOT NULL DEFAULT '0', "hour19" integer NOT NULL DEFAULT '0', "hour20" integer NOT NULL DEFAULT '0', "hour21" integer NOT NULL DEFAULT '0', "hour22" integer NOT NULL DEFAULT '0', "hour23" integer NOT NULL DEFAULT '0', "resetAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "REL_c1ecf538b2399b780acc9ca051" UNIQUE ("organisationId"), CONSTRAINT "PK_f683516582096f883352cdbd9ee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usage_hourly" ADD CONSTRAINT "FK_c1ecf538b2399b780acc9ca051a" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usage_hourly" DROP CONSTRAINT "FK_c1ecf538b2399b780acc9ca051a"`);
        await queryRunner.query(`DROP TABLE "usage_hourly"`);
    }

}

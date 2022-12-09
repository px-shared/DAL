import {MigrationInterface, QueryRunner} from "typeorm";

export class addIntegrations1670587017819 implements MigrationInterface {
    name = 'addIntegrations1670587017819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "integration" ("id" SERIAL NOT NULL, "provider" character varying(64) NOT NULL, "data" text, "token" character varying, "refresh" character varying, "endpoint" character varying, "errorMessage" character varying, "expires" TIMESTAMP WITH TIME ZONE, "accessedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "PK_f348d4694945d9dc4c7049a178a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "integration" ADD CONSTRAINT "FK_4b50b051de0409d1e9af8a90ba3" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "integration" DROP CONSTRAINT "FK_4b50b051de0409d1e9af8a90ba3"`);
        await queryRunner.query(`DROP TABLE "integration"`);
    }

}

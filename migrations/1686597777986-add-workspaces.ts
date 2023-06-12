import {MigrationInterface, QueryRunner} from "typeorm";

export class addWorkspaces1686597777986 implements MigrationInterface {
    name = 'addWorkspaces1686597777986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workspace" ("id" SERIAL NOT NULL, "name" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, CONSTRAINT "PK_ca86b6f9b3be5fe26d307d09b49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "short" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_5e812e6dbe010c970bee4d6198e" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workspace" ADD CONSTRAINT "FK_7655ee5657f1ac4142101ac61f2" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace" DROP CONSTRAINT "FK_7655ee5657f1ac4142101ac61f2"`);
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_5e812e6dbe010c970bee4d6198e"`);
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`DROP TABLE "workspace"`);
    }

}

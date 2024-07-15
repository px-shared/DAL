import {MigrationInterface, QueryRunner} from "typeorm";

export class addGenerationsTracker1721063245472 implements MigrationInterface {
    name = 'addGenerationsTracker1721063245472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "generation" ("id" SERIAL NOT NULL, "prompt" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "workspaceId" integer, "userId" integer, CONSTRAINT "PK_58db1b8155c99c2604394ffef2a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "generation" ADD CONSTRAINT "FK_52c8d4bfa3a1576c5b3ff77b5ab" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "generation" ADD CONSTRAINT "FK_c11c05957f7c82339e2a31a1d98" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "generation" DROP CONSTRAINT "FK_c11c05957f7c82339e2a31a1d98"`);
        await queryRunner.query(`ALTER TABLE "generation" DROP CONSTRAINT "FK_52c8d4bfa3a1576c5b3ff77b5ab"`);
        await queryRunner.query(`DROP TABLE "generation"`);
    }

}

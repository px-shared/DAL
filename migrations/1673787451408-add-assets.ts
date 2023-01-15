import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssets1673787451408 implements MigrationInterface {
    name = 'addAssets1673787451408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "asset" ("id" SERIAL NOT NULL, "resource" character varying NOT NULL, "reference" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usage" ADD "assets" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_5cb0293e6d2f45b0682896646f0" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_e469bb1b58d7ae4d9527d35ca01" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_e469bb1b58d7ae4d9527d35ca01"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_5cb0293e6d2f45b0682896646f0"`);
        await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "assets"`);
        await queryRunner.query(`DROP TABLE "asset"`);
    }

}

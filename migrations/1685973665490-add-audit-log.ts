import {MigrationInterface, QueryRunner} from "typeorm";

export class addAuditLog1685973665490 implements MigrationInterface {
    name = 'addAuditLog1685973665490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "audit" ("id" SERIAL NOT NULL, "action" character varying NOT NULL, "entity" character varying NOT NULL, "entityId" character varying, "payload" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_1d3d120ddaf7bc9b1ed68ed463a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "entity-idx" ON "audit" ("entity", "action") `);
        await queryRunner.query(`ALTER TABLE "audit" ADD CONSTRAINT "FK_07b12be3f21b26a5df3d1987743" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "audit" ADD CONSTRAINT "FK_7ae389e858ad6f2c0c63112e387" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "audit" DROP CONSTRAINT "FK_7ae389e858ad6f2c0c63112e387"`);
        await queryRunner.query(`ALTER TABLE "audit" DROP CONSTRAINT "FK_07b12be3f21b26a5df3d1987743"`);
        await queryRunner.query(`DROP INDEX "public"."entity-idx"`);
        await queryRunner.query(`DROP TABLE "audit"`);
    }

}

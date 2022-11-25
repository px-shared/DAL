import {MigrationInterface, QueryRunner} from "typeorm";

export class addSites1669368595159 implements MigrationInterface {
    name = 'addSites1669368595159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "site" ("id" SERIAL NOT NULL, "reference" character varying NOT NULL, "data" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_635c0eeabda8862d5b0237b42b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "short" ADD "siteId" integer`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_14f0b9e0cbbf76d7e156b4ce8e8" FOREIGN KEY ("siteId") REFERENCES "site"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_e6ac4150af3c67be5912ea72c1b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_e03827c061fbf85fd3aae454aec" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_e03827c061fbf85fd3aae454aec"`);
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_e6ac4150af3c67be5912ea72c1b"`);
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_14f0b9e0cbbf76d7e156b4ce8e8"`);
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "siteId"`);
        await queryRunner.query(`DROP TABLE "site"`);
    }

}

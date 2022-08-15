import {MigrationInterface, QueryRunner} from "typeorm";

export class addQrModel1660600901440 implements MigrationInterface {
    name = 'addQrModel1660600901440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "qr" ("id" SERIAL NOT NULL, "provider" character varying NOT NULL, "identifier" character varying NOT NULL, "reference" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_49a4316084cad5ba127bd32cfb3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD "qrCodeId" integer`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "UQ_b713727c5690cc77616f7928813" UNIQUE ("qrCodeId")`);
        await queryRunner.query(`ALTER TABLE "short" ADD "qrCodeId" integer`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_b713727c5690cc77616f7928813" FOREIGN KEY ("qrCodeId") REFERENCES "qr"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_73a6474df77b873efe005c8d79b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_80516c4f71562f027bfa71ce94c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_33b78d3a28c764dd4fae643c30b" FOREIGN KEY ("qrCodeId") REFERENCES "qr"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_33b78d3a28c764dd4fae643c30b"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_80516c4f71562f027bfa71ce94c"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_73a6474df77b873efe005c8d79b"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_b713727c5690cc77616f7928813"`);
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "qrCodeId"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "UQ_b713727c5690cc77616f7928813"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP COLUMN "qrCodeId"`);
        await queryRunner.query(`DROP TABLE "qr"`);
    }

}

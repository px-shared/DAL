import {MigrationInterface, QueryRunner} from "typeorm";

export class addQrCodes1660768696844 implements MigrationInterface {
    name = 'addQrCodes1660768696844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "qr" ("id" SERIAL NOT NULL, "reference" character varying NOT NULL, "errorCorrectionLevel" character varying NOT NULL, "margin" integer NOT NULL DEFAULT '1', "format" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_49a4316084cad5ba127bd32cfb3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD "qrId" integer`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "UQ_cb5598de1ca05b92445db80b31d" UNIQUE ("qrId")`);
        await queryRunner.query(`ALTER TABLE "short" ADD "qrId" integer`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_cb5598de1ca05b92445db80b31d" FOREIGN KEY ("qrId") REFERENCES "qr"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_73a6474df77b873efe005c8d79b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_80516c4f71562f027bfa71ce94c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_da011e149d2c13d71cae79f133e" FOREIGN KEY ("qrId") REFERENCES "qr"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_da011e149d2c13d71cae79f133e"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_80516c4f71562f027bfa71ce94c"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_73a6474df77b873efe005c8d79b"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_cb5598de1ca05b92445db80b31d"`);
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "qrId"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "UQ_cb5598de1ca05b92445db80b31d"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP COLUMN "qrId"`);
        await queryRunner.query(`DROP TABLE "qr"`);
    }

}

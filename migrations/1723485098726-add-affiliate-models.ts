import {MigrationInterface, QueryRunner} from "typeorm";

export class addAffiliateModels1723485098726 implements MigrationInterface {
    name = 'addAffiliateModels1723485098726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "affiliate_click" ("id" SERIAL NOT NULL, "cid" character varying, "linkId" character varying, "sourceId" character varying, "ipAddress" character varying, "userAgent" character varying, "countryCode" character varying, "subdivisionCode" character varying, "city" character varying, "cityLatLong" text, "requestUrl" character varying, "referer" character varying, "affS1" character varying, "affS2" character varying, "affS3" character varying, "affS4" character varying, "affS5" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_d23468ef3bd8148858f289737a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "affiliate_conversion" ("id" SERIAL NOT NULL, "cid" character varying, "externalCid" character varying, "couponCodes" text, "revenueOriginId" character varying, "conversionTypeCode" character varying, "status" character varying, "amount" character varying, "currency" character varying, "externalId" character varying, "customerId" character varying, "customParams" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "affiliateClickId" integer, CONSTRAINT "REL_ec36dfa7d697a3d7365d7a5507" UNIQUE ("affiliateClickId"), CONSTRAINT "PK_aebed685f3f5a96c051498677fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "affiliate_conversion" ADD CONSTRAINT "FK_ec36dfa7d697a3d7365d7a55074" FOREIGN KEY ("affiliateClickId") REFERENCES "affiliate_click"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "affiliate_conversion" DROP CONSTRAINT "FK_ec36dfa7d697a3d7365d7a55074"`);
        await queryRunner.query(`DROP TABLE "affiliate_conversion"`);
        await queryRunner.query(`DROP TABLE "affiliate_click"`);
    }

}

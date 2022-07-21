import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDefaults1655030675675 implements MigrationInterface {
  name = 'addDefaults1655030675675';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "defaults" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "domainId" character varying, "pixelId" integer, "tagId" integer, "userId" integer, CONSTRAINT "REL_ebaa44d61435a8be9e181402ee" UNIQUE ("domainId"), CONSTRAINT "REL_93119f105005d6f520e9dc3436" UNIQUE ("pixelId"), CONSTRAINT "REL_51da6178b9049eb8a3704f1242" UNIQUE ("tagId"), CONSTRAINT "REL_759f1574b1612768ecbcd6a3e7" UNIQUE ("userId"), CONSTRAINT "PK_00bcf3f2a341a686d744ebf7d22" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" ADD CONSTRAINT "FK_ebaa44d61435a8be9e181402ee8" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" ADD CONSTRAINT "FK_93119f105005d6f520e9dc34365" FOREIGN KEY ("pixelId") REFERENCES "pixel"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" ADD CONSTRAINT "FK_51da6178b9049eb8a3704f12421" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" ADD CONSTRAINT "FK_759f1574b1612768ecbcd6a3e79" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "defaults" DROP CONSTRAINT "FK_759f1574b1612768ecbcd6a3e79"`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" DROP CONSTRAINT "FK_51da6178b9049eb8a3704f12421"`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" DROP CONSTRAINT "FK_93119f105005d6f520e9dc34365"`
    );
    await queryRunner.query(
      `ALTER TABLE "defaults" DROP CONSTRAINT "FK_ebaa44d61435a8be9e181402ee8"`
    );
    await queryRunner.query(`DROP TABLE "defaults"`);
  }
}

import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDefaults1686652233632 implements MigrationInterface {
    name = 'fixDefaults1686652233632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_ebaa44d61435a8be9e181402ee8"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_93119f105005d6f520e9dc34365"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_cb5598de1ca05b92445db80b31d"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_51da6178b9049eb8a3704f12421"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "REL_ebaa44d61435a8be9e181402ee"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "REL_93119f105005d6f520e9dc3436"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "UQ_cb5598de1ca05b92445db80b31d"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "REL_51da6178b9049eb8a3704f1242"`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_ebaa44d61435a8be9e181402ee8" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_93119f105005d6f520e9dc34365" FOREIGN KEY ("pixelId") REFERENCES "pixel"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_cb5598de1ca05b92445db80b31d" FOREIGN KEY ("qrId") REFERENCES "qr"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_51da6178b9049eb8a3704f12421" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_51da6178b9049eb8a3704f12421"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_cb5598de1ca05b92445db80b31d"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_93119f105005d6f520e9dc34365"`);
        await queryRunner.query(`ALTER TABLE "defaults" DROP CONSTRAINT "FK_ebaa44d61435a8be9e181402ee8"`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "REL_51da6178b9049eb8a3704f1242" UNIQUE ("tagId")`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "UQ_cb5598de1ca05b92445db80b31d" UNIQUE ("qrId")`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "REL_93119f105005d6f520e9dc3436" UNIQUE ("pixelId")`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "REL_ebaa44d61435a8be9e181402ee" UNIQUE ("domainId")`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_51da6178b9049eb8a3704f12421" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_cb5598de1ca05b92445db80b31d" FOREIGN KEY ("qrId") REFERENCES "qr"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_93119f105005d6f520e9dc34365" FOREIGN KEY ("pixelId") REFERENCES "pixel"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "defaults" ADD CONSTRAINT "FK_ebaa44d61435a8be9e181402ee8" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}

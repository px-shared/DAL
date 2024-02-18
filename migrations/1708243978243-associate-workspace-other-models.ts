import {MigrationInterface, QueryRunner} from "typeorm";

export class associateWorkspaceOtherModels1708243978243 implements MigrationInterface {
    name = 'associateWorkspaceOtherModels1708243978243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "access_token" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "audit" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "domain" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "integration" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "pixel" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "qr" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "segment" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "UQ_7004cfc9897ffde1a161cb0ebe3" UNIQUE ("workspaceId")`);
        await queryRunner.query(`ALTER TABLE "site" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "tag" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "workspaceId" integer`);
        await queryRunner.query(`ALTER TABLE "access_token" ADD CONSTRAINT "FK_9ec2dffb4277611f804bb978769" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_e82424ba3e34f5188381dc3f219" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "audit" ADD CONSTRAINT "FK_56c153688c355e9a2cf65d056f4" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "domain" ADD CONSTRAINT "FK_a16ae36e5e005a17e522a46ad54" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "integration" ADD CONSTRAINT "FK_a39552de8fedd4562a1c2d44bde" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pixel" ADD CONSTRAINT "FK_6e21a0cd810da9698a30abc0308" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_620c63c91e8f129b9c77de463df" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "segment" ADD CONSTRAINT "FK_8cc5436f7b5d48f5d4ad4e9cd6f" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "FK_7004cfc9897ffde1a161cb0ebe3" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_1f79f9df08b98c22d16333f945b" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "FK_8516872e5b1ff7d97b6245f6ef6" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_644a803e68bebd3eedff879ac96" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_644a803e68bebd3eedff879ac96"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "FK_8516872e5b1ff7d97b6245f6ef6"`);
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_1f79f9df08b98c22d16333f945b"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_7004cfc9897ffde1a161cb0ebe3"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP CONSTRAINT "FK_8cc5436f7b5d48f5d4ad4e9cd6f"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_620c63c91e8f129b9c77de463df"`);
        await queryRunner.query(`ALTER TABLE "pixel" DROP CONSTRAINT "FK_6e21a0cd810da9698a30abc0308"`);
        await queryRunner.query(`ALTER TABLE "integration" DROP CONSTRAINT "FK_a39552de8fedd4562a1c2d44bde"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP CONSTRAINT "FK_a16ae36e5e005a17e522a46ad54"`);
        await queryRunner.query(`ALTER TABLE "audit" DROP CONSTRAINT "FK_56c153688c355e9a2cf65d056f4"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_e82424ba3e34f5188381dc3f219"`);
        await queryRunner.query(`ALTER TABLE "access_token" DROP CONSTRAINT "FK_9ec2dffb4277611f804bb978769"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "UQ_7004cfc9897ffde1a161cb0ebe3"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "pixel" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "integration" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "audit" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "access_token" DROP COLUMN "workspaceId"`);
    }

}

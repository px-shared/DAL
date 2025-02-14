import {MigrationInterface, QueryRunner} from "typeorm";

export class addOrgDelete1739554896281 implements MigrationInterface {
    name = 'addOrgDelete1739554896281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "audit" DROP CONSTRAINT "FK_56c153688c355e9a2cf65d056f4"`);
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_5e812e6dbe010c970bee4d6198e"`);
        await queryRunner.query(`ALTER TABLE "audit" ADD CONSTRAINT "FK_56c153688c355e9a2cf65d056f4" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_5e812e6dbe010c970bee4d6198e" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_5e812e6dbe010c970bee4d6198e"`);
        await queryRunner.query(`ALTER TABLE "audit" DROP CONSTRAINT "FK_56c153688c355e9a2cf65d056f4"`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_5e812e6dbe010c970bee4d6198e" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "audit" ADD CONSTRAINT "FK_56c153688c355e9a2cf65d056f4" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}

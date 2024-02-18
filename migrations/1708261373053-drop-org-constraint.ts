import {MigrationInterface, QueryRunner} from "typeorm";

export class dropOrgConstraint1708261373053 implements MigrationInterface {
    name = 'dropOrgConstraint1708261373053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "access_token" DROP CONSTRAINT "FK_7a5564a633c54618d0d0330676b"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_5cb0293e6d2f45b0682896646f0"`);
        await queryRunner.query(`ALTER TABLE "audit" DROP CONSTRAINT "FK_07b12be3f21b26a5df3d1987743"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP CONSTRAINT "FK_e4461042fc29e41e7877b8c41c7"`);
        await queryRunner.query(`ALTER TABLE "integration" DROP CONSTRAINT "FK_4b50b051de0409d1e9af8a90ba3"`);
        await queryRunner.query(`ALTER TABLE "pixel" DROP CONSTRAINT "FK_1ae3420aa0e1f0617d90e88e2f5"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_73a6474df77b873efe005c8d79b"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP CONSTRAINT "FK_d40ccd34449c5e63e3c8e92c64f"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_75cb3de70bee8dd51253826467a"`);
        await queryRunner.query(`ALTER TABLE "short" DROP CONSTRAINT "FK_727cb9a0c79324b5b9de3667939"`);
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_e6ac4150af3c67be5912ea72c1b"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "FK_e3ae4c9b50f7ac135031a09de87"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_organisation"`);
        await queryRunner.query(`ALTER TABLE "access_token" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "audit" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "integration" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "pixel" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "qr" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "REL_75cb3de70bee8dd51253826467"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "site" DROP COLUMN "organisationId"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "organisationId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tag" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "site" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "short" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "REL_75cb3de70bee8dd51253826467" UNIQUE ("organisationId")`);
        await queryRunner.query(`ALTER TABLE "segment" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "qr" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "pixel" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "integration" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "domain" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "audit" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "organisationId" character varying`);
        await queryRunner.query(`ALTER TABLE "access_token" ADD "organisationId" character varying`);
        await queryRunner.query(`CREATE INDEX "IDX_organisation" ON "short" ("organisationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_user" ON "short" ("organisationId", "userId") `);
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "FK_e3ae4c9b50f7ac135031a09de87" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_e6ac4150af3c67be5912ea72c1b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "short" ADD CONSTRAINT "FK_727cb9a0c79324b5b9de3667939" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "FK_75cb3de70bee8dd51253826467a" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "segment" ADD CONSTRAINT "FK_d40ccd34449c5e63e3c8e92c64f" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_73a6474df77b873efe005c8d79b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pixel" ADD CONSTRAINT "FK_1ae3420aa0e1f0617d90e88e2f5" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "integration" ADD CONSTRAINT "FK_4b50b051de0409d1e9af8a90ba3" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "domain" ADD CONSTRAINT "FK_e4461042fc29e41e7877b8c41c7" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "audit" ADD CONSTRAINT "FK_07b12be3f21b26a5df3d1987743" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_5cb0293e6d2f45b0682896646f0" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_token" ADD CONSTRAINT "FK_7a5564a633c54618d0d0330676b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

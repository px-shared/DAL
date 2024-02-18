import {MigrationInterface, QueryRunner} from "typeorm";

export class associateWorkspacesUser1708244581968 implements MigrationInterface {
    name = 'associateWorkspacesUser1708244581968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_644a803e68bebd3eedff879ac96"`);
        await queryRunner.query(`CREATE TABLE "workspace_users_user" ("workspaceId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_e838ab3e6c445c5c091f252b716" PRIMARY KEY ("workspaceId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e560bebe0dad802fbb036ba878" ON "workspace_users_user" ("workspaceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ff70af68685d8a5d6b588dfdc5" ON "workspace_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "workspaceId"`);
        await queryRunner.query(`ALTER TABLE "workspace_users_user" ADD CONSTRAINT "FK_e560bebe0dad802fbb036ba8788" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "workspace_users_user" ADD CONSTRAINT "FK_ff70af68685d8a5d6b588dfdc5b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace_users_user" DROP CONSTRAINT "FK_ff70af68685d8a5d6b588dfdc5b"`);
        await queryRunner.query(`ALTER TABLE "workspace_users_user" DROP CONSTRAINT "FK_e560bebe0dad802fbb036ba8788"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "workspaceId" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ff70af68685d8a5d6b588dfdc5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e560bebe0dad802fbb036ba878"`);
        await queryRunner.query(`DROP TABLE "workspace_users_user"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_644a803e68bebd3eedff879ac96" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

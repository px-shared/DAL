import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAccessToken1658786967990 implements MigrationInterface {
  name = 'addAccessToken1658786967990';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "access_token" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "token" character varying NOT NULL, "permissions" text, "expires" TIMESTAMP WITH TIME ZONE NOT NULL, "accessedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "UQ_70ba8f6af34bc924fc9e12adb8f" UNIQUE ("token"), CONSTRAINT "PK_f20f028607b2603deabd8182d12" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "usage" ADD "tokens" integer NOT NULL DEFAULT '0'`
    );
    await queryRunner.query(
      `ALTER TABLE "access_token" ADD CONSTRAINT "FK_7a5564a633c54618d0d0330676b" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "access_token" ADD CONSTRAINT "FK_9949557d0e1b2c19e5344c171e9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "access_token" DROP CONSTRAINT "FK_9949557d0e1b2c19e5344c171e9"`
    );
    await queryRunner.query(
      `ALTER TABLE "access_token" DROP CONSTRAINT "FK_7a5564a633c54618d0d0330676b"`
    );
    await queryRunner.query(`ALTER TABLE "usage" DROP COLUMN "tokens"`);
    await queryRunner.query(`DROP TABLE "access_token"`);
  }
}

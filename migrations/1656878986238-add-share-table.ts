import { MigrationInterface, QueryRunner } from 'typeorm';

export class addShareTable1656878986238 implements MigrationInterface {
  name = 'addShareTable1656878986238';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "share" ("id" SERIAL NOT NULL, "token" character varying(256), "active" boolean NOT NULL DEFAULT true, "filter" text, "rangeStart" TIMESTAMP WITH TIME ZONE, "rangeEnd" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_67a2b28d2cff31834bc2aa1ed7c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`CREATE INDEX "IDX_token" ON "share" ("token") `);
    await queryRunner.query(
      `ALTER TABLE "share" ADD CONSTRAINT "FK_dd80ba3fffe002940204e4fa87f" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "share" ADD CONSTRAINT "FK_07e293248ed4aeb7965af840b13" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "share" DROP CONSTRAINT "FK_07e293248ed4aeb7965af840b13"`
    );
    await queryRunner.query(
      `ALTER TABLE "share" DROP CONSTRAINT "FK_dd80ba3fffe002940204e4fa87f"`
    );
    await queryRunner.query(`DROP INDEX "public"."IDX_token"`);
    await queryRunner.query(`DROP TABLE "share"`);
  }
}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addSegmentModel1674754845036 implements MigrationInterface {
    name = 'addSegmentModel1674754845036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "segment" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "ruleset" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "organisationId" character varying, "userId" integer, CONSTRAINT "PK_d648ac58d8e0532689dfb8ad7ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "short_segments_segment" ("shortId" character varying NOT NULL, "segmentId" integer NOT NULL, CONSTRAINT "PK_bf907c8bb419e28ca5c3e77fd2d" PRIMARY KEY ("shortId", "segmentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc69a98de504abde758b64de80" ON "short_segments_segment" ("shortId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bf436d547b9754af3f3f1237ab" ON "short_segments_segment" ("segmentId") `);
        await queryRunner.query(`ALTER TABLE "segment" ADD CONSTRAINT "FK_d40ccd34449c5e63e3c8e92c64f" FOREIGN KEY ("organisationId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "segment" ADD CONSTRAINT "FK_efe7ce4e85c90aba0882bde0f46" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "short_segments_segment" ADD CONSTRAINT "FK_bc69a98de504abde758b64de803" FOREIGN KEY ("shortId") REFERENCES "short"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "short_segments_segment" ADD CONSTRAINT "FK_bf436d547b9754af3f3f1237ab0" FOREIGN KEY ("segmentId") REFERENCES "segment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short_segments_segment" DROP CONSTRAINT "FK_bf436d547b9754af3f3f1237ab0"`);
        await queryRunner.query(`ALTER TABLE "short_segments_segment" DROP CONSTRAINT "FK_bc69a98de504abde758b64de803"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP CONSTRAINT "FK_efe7ce4e85c90aba0882bde0f46"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP CONSTRAINT "FK_d40ccd34449c5e63e3c8e92c64f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf436d547b9754af3f3f1237ab"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc69a98de504abde758b64de80"`);
        await queryRunner.query(`DROP TABLE "short_segments_segment"`);
        await queryRunner.query(`DROP TABLE "segment"`);
    }

}

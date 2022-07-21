import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserAssetRelationship1649142136691
  implements MigrationInterface
{
  name = 'AddUserAssetRelationship1649142136691';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "domain" ADD "userId" integer`);
    await queryRunner.query(`ALTER TABLE "pixel" ADD "userId" integer`);
    await queryRunner.query(`ALTER TABLE "short" ADD "userId" integer`);
    await queryRunner.query(`ALTER TABLE "tag" ADD "userId" integer`);
    await queryRunner.query(
      `ALTER TABLE "domain" ADD CONSTRAINT "FK_dde349027ada546b854e9fdb5fc" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "pixel" ADD CONSTRAINT "FK_c272ef83f562a488fba115cbfb6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "short" ADD CONSTRAINT "FK_8adfe0a924a14537de8768a7ca2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "tag" ADD CONSTRAINT "FK_d0dc39ff83e384b4a097f47d3f5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tag" DROP CONSTRAINT "FK_d0dc39ff83e384b4a097f47d3f5"`
    );
    await queryRunner.query(
      `ALTER TABLE "short" DROP CONSTRAINT "FK_8adfe0a924a14537de8768a7ca2"`
    );
    await queryRunner.query(
      `ALTER TABLE "pixel" DROP CONSTRAINT "FK_c272ef83f562a488fba115cbfb6"`
    );
    await queryRunner.query(
      `ALTER TABLE "domain" DROP CONSTRAINT "FK_dde349027ada546b854e9fdb5fc"`
    );
    await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "pixel" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "userId"`);
  }
}

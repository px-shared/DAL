import {MigrationInterface, QueryRunner} from "typeorm";

export class addTransitive1696506920920 implements MigrationInterface {
    name = 'addTransitive1696506920920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" ADD "transitive" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "short" DROP COLUMN "transitive"`);
    }

}

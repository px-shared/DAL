import {MigrationInterface, QueryRunner} from "typeorm";

export class addLast4Subscription1739386999297 implements MigrationInterface {
    name = 'addLast4Subscription1739386999297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" ADD "last4" character varying(64)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "last4"`);
    }

}

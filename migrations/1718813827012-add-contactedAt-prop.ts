import {MigrationInterface, QueryRunner} from "typeorm";

export class addContactedAtProp1718813827012 implements MigrationInterface {
    name = 'addContactedAtProp1718813827012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" ADD "contactedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "contactedAt"`);
    }

}

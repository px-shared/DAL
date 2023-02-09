import { MigrationInterface, QueryRunner } from 'typeorm';

export class varchar64Route1675939488284 implements MigrationInterface {
  name = 'varchar64Route1675939488284';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE short ALTER COLUMN route TYPE character varying(64)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE short ALTER COLUMN route TYPE character varying(32)`
    );
  }
}

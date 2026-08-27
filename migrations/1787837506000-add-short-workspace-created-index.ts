import { MigrationInterface, QueryRunner } from 'typeorm';

const INDEX = 'short-workspace-created-idx';

/**
 * Workspace-scoped, creation-ordered index for listing short links.
 *
 * Before this, `short` carried nothing but its primary key, so listing a
 * workspace's links meant a parallel sequential scan of the whole table plus an
 * on-disk merge sort (measured: 439ms for a single 50-row page).
 *
 * Column order matches `ORDER BY "createdAt" DESC, "id" DESC` under an equality
 * filter on "workspaceId". The index is built ascending on purpose: Postgres
 * serves the all-DESC ordering with an Index Scan Backward at identical cost,
 * and TypeORM 0.2 cannot express per-column direction in entity metadata, so an
 * ascending index is what `models/Short.ts` and this migration can agree on.
 *
 * Partial on "deletedAt" IS NULL because TypeORM injects that predicate into
 * every select against a soft-deletable entity, which also lets the total-count
 * query be answered by an index-only scan.
 *
 * On production this index was created out-of-band with CREATE INDEX
 * CONCURRENTLY so writes were never blocked; the catalog guard below therefore
 * makes `up()` a lock-free no-op there. Note the guard is a catalog SELECT
 * rather than CREATE INDEX IF NOT EXISTS: Postgres takes a ShareLock on the
 * table before it checks for an existing index name, and that lock would be
 * held for the remainder of the migration transaction, blocking every write to
 * `short` (i.e. the whole redirect path).
 */
export class addShortWorkspaceCreatedIndex1787837506000
  implements MigrationInterface
{
  name = 'addShortWorkspaceCreatedIndex1787837506000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const existing = await queryRunner.query(
      `SELECT i.indisvalid FROM pg_class c
         JOIN pg_index i ON i.indexrelid = c.oid
        WHERE c.relkind = 'i'
          AND c.relnamespace = 'public'::regnamespace
          AND c.relname = '${INDEX}'`
    );

    if (existing.length > 0) {
      if (existing[0].indisvalid) return;

      throw new Error(
        `Index "${INDEX}" exists but is INVALID, which means a CREATE INDEX ` +
          `CONCURRENTLY failed partway. It costs writes and serves no reads. ` +
          `Run: DROP INDEX CONCURRENTLY "public"."${INDEX}"; then rebuild it ` +
          `concurrently, or re-run this migration to build it in-line.`
      );
    }

    await queryRunner.query(
      `CREATE INDEX "${INDEX}" ON "short" ("workspaceId", "createdAt", "id") WHERE "deletedAt" IS NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "public"."${INDEX}"`);
  }
}

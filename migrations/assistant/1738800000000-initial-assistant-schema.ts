import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialAssistantSchema1738800000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Enable pgvector extension
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS vector`);

    // Create assistant table
    await queryRunner.query(`
      CREATE TABLE "assistant" (
        "id" SERIAL PRIMARY KEY,
        "name" varchar NOT NULL,
        "systemPrompt" text NOT NULL,
        "welcomeMessage" varchar,
        "primaryColor" varchar NOT NULL DEFAULT '#1890ff',
        "active" boolean NOT NULL DEFAULT true,
        "workspaceId" int NOT NULL,
        "userId" int NOT NULL,
        "shortId" varchar,
        "createdAt" timestamptz NOT NULL DEFAULT now(),
        "updatedAt" timestamptz NOT NULL DEFAULT now(),
        "deletedAt" timestamptz
      )
    `);

    // Create assistant_document table
    await queryRunner.query(`
      CREATE TABLE "assistant_document" (
        "id" SERIAL PRIMARY KEY,
        "name" varchar NOT NULL,
        "s3Key" varchar NOT NULL,
        "fileType" varchar(16) NOT NULL,
        "status" varchar(16) NOT NULL DEFAULT 'pending',
        "chunkCount" int NOT NULL DEFAULT 0,
        "errorMessage" varchar,
        "workspaceId" int NOT NULL,
        "userId" int NOT NULL,
        "assistantId" int NOT NULL,
        "createdAt" timestamptz NOT NULL DEFAULT now(),
        "updatedAt" timestamptz NOT NULL DEFAULT now(),
        "deletedAt" timestamptz,
        CONSTRAINT "FK_assistant_document_assistant" FOREIGN KEY ("assistantId")
          REFERENCES "assistant"("id") ON DELETE CASCADE
      )
    `);

    // Create assistant_chunk table (embedding column via raw SQL for pgvector)
    await queryRunner.query(`
      CREATE TABLE "assistant_chunk" (
        "id" SERIAL PRIMARY KEY,
        "content" text NOT NULL,
        "chunkIndex" int NOT NULL,
        "tokenCount" int NOT NULL,
        "embedding" vector(1536),
        "documentId" int NOT NULL,
        "createdAt" timestamptz NOT NULL DEFAULT now(),
        CONSTRAINT "FK_assistant_chunk_document" FOREIGN KEY ("documentId")
          REFERENCES "assistant_document"("id") ON DELETE CASCADE
      )
    `);

    // Create assistant_conversation table
    await queryRunner.query(`
      CREATE TABLE "assistant_conversation" (
        "id" SERIAL PRIMARY KEY,
        "visitorId" varchar(64) NOT NULL,
        "messages" text NOT NULL DEFAULT '[]',
        "messageCount" int NOT NULL DEFAULT 0,
        "preview" varchar,
        "assistantId" int NOT NULL,
        "createdAt" timestamptz NOT NULL DEFAULT now(),
        "updatedAt" timestamptz NOT NULL DEFAULT now(),
        CONSTRAINT "FK_assistant_conversation_assistant" FOREIGN KEY ("assistantId")
          REFERENCES "assistant"("id") ON DELETE CASCADE
      )
    `);

    // Indexes
    await queryRunner.query(
      `CREATE INDEX "IDX_assistant_workspaceId" ON "assistant" ("workspaceId")`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_assistant_shortId" ON "assistant" ("shortId")`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_assistant_document_assistantId" ON "assistant_document" ("assistantId")`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_assistant_chunk_documentId" ON "assistant_chunk" ("documentId")`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_assistant_conversation_assistantId" ON "assistant_conversation" ("assistantId")`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_assistant_conversation_visitorId" ON "assistant_conversation" ("visitorId")`
    );

    // IVFFlat index for vector similarity search
    await queryRunner.query(`
      CREATE INDEX "IDX_assistant_chunk_embedding" ON "assistant_chunk"
        USING ivfflat ("embedding" vector_cosine_ops) WITH (lists = 100)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "assistant_conversation"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "assistant_chunk"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "assistant_document"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "assistant"`);
    await queryRunner.query(`DROP EXTENSION IF EXISTS vector`);
  }
}

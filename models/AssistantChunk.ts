import { EntitySchema } from 'typeorm';
import AssistantDocument from './AssistantDocument';

export default interface AssistantChunk {
  id: number;

  content: string;
  chunkIndex: number;
  tokenCount: number;

  document: AssistantDocument;

  createdAt: Date;
}

export default class AssistantChunk {}

// Note: The `embedding` column (vector(1536)) is NOT in EntitySchema.
// TypeORM 0.2.x has no vector type - managed via raw SQL only.
export const AssistantChunkSchema = new EntitySchema<AssistantChunk>({
  name: 'AssistantChunk',
  target: AssistantChunk,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    content: {
      type: 'text',
      nullable: false
    },
    chunkIndex: {
      type: 'int',
      nullable: false
    },
    tokenCount: {
      type: 'int',
      nullable: false
    },
    createdAt: {
      type: 'timestamptz',
      createDate: true,
      select: true
    }
  },
  relations: {
    document: {
      type: 'many-to-one',
      target: 'AssistantDocument',
      inverseSide: 'chunks',
      onDelete: 'CASCADE'
    }
  }
});

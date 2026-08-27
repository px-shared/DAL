import { EntitySchema } from 'typeorm';
import Assistant from './Assistant';

export default interface AssistantDocument {
  id: number;

  name: string;
  s3Key: string;
  fileType: string;
  status: string;
  chunkCount: number;
  errorMessage: string;
  workspaceId: number;
  userId: number;

  assistant: Assistant;
  chunks: any[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class AssistantDocument {}

export const AssistantDocumentSchema = new EntitySchema<AssistantDocument>({
  name: 'AssistantDocument',
  target: AssistantDocument,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    name: {
      type: 'varchar',
      nullable: false
    },
    s3Key: {
      type: 'varchar',
      nullable: false
    },
    fileType: {
      type: 'varchar',
      length: 16,
      nullable: false
    },
    status: {
      type: 'varchar',
      length: 16,
      default: 'pending'
    },
    chunkCount: {
      type: 'int',
      default: 0
    },
    errorMessage: {
      type: 'varchar',
      nullable: true
    },
    workspaceId: {
      type: 'int',
      nullable: false
    },
    userId: {
      type: 'int',
      nullable: false
    },
    createdAt: {
      type: 'timestamptz',
      createDate: true,
      select: true
    },
    updatedAt: {
      type: 'timestamptz',
      updateDate: true,
      select: false
    },
    deletedAt: {
      type: 'timestamptz',
      deleteDate: true,
      select: false
    }
  },
  relations: {
    assistant: {
      type: 'many-to-one',
      target: 'Assistant',
      inverseSide: 'documents',
      onDelete: 'CASCADE'
    },
    chunks: {
      type: 'one-to-many',
      target: 'AssistantChunk',
      inverseSide: 'document'
    }
  }
});

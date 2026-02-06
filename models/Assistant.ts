import { EntitySchema } from 'typeorm';

export default interface Assistant {
  id: number;

  name: string;
  systemPrompt: string;
  welcomeMessage: string;
  primaryColor: string;
  emoji: string;
  active: boolean;
  workspaceId: number;
  userId: number;
  shortId: string;

  documents: any[];
  conversations: any[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Assistant {
  // @ts-ignore
  public static name = 'Assistant';
}

export const AssistantSchema = new EntitySchema<Assistant>({
  name: 'Assistant',
  target: Assistant,
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
    systemPrompt: {
      type: 'text',
      nullable: false
    },
    welcomeMessage: {
      type: 'varchar',
      nullable: true
    },
    primaryColor: {
      type: 'varchar',
      default: '#1890ff'
    },
    emoji: {
      type: 'varchar',
      nullable: true,
      default: "'\\u2728'"
    },
    active: {
      type: 'boolean',
      default: true
    },
    workspaceId: {
      type: 'int',
      nullable: false
    },
    userId: {
      type: 'int',
      nullable: false
    },
    shortId: {
      type: 'varchar',
      nullable: true
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
    documents: {
      type: 'one-to-many',
      target: 'AssistantDocument',
      inverseSide: 'assistant'
    },
    conversations: {
      type: 'one-to-many',
      target: 'AssistantConversation',
      inverseSide: 'assistant'
    }
  }
});

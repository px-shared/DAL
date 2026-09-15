import { EntitySchema } from 'typeorm';
import Assistant from './Assistant';
import { named } from './named';

export default interface AssistantConversation {
  id: number;

  visitorId: string;
  messages: any[];
  messageCount: number;
  preview: string;

  assistant: Assistant;

  createdAt: Date;
  updatedAt: Date;
}

export default class AssistantConversation {}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(AssistantConversation, 'AssistantConversation');

export const AssistantConversationSchema =
  new EntitySchema<AssistantConversation>({
    name: 'AssistantConversation',
    target: AssistantConversation,
    columns: {
      id: {
        type: 'int',
        primary: true,
        generated: true
      },
      visitorId: {
        type: 'varchar',
        length: 64,
        nullable: false
      },
      messages: {
        type: 'simple-json',
        nullable: false,
        default: '[]'
      },
      messageCount: {
        type: 'int',
        default: 0
      },
      preview: {
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
        select: true
      }
    },
    relations: {
      assistant: {
        type: 'many-to-one',
        target: 'Assistant',
        inverseSide: 'conversations',
        onDelete: 'CASCADE'
      }
    }
  });

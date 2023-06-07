import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';

export default interface Summary {
  id: number;

  sessions: number;
  shorts: number;
  events: number;
  pixels: number;
  tags: number;
  qrs: number;
  sites: number;
  domains: number;
  tokens: number;
  assets: number;

  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Summary {}

export const SummarySchema = new EntitySchema<Summary>({
  name: 'Summary',
  target: Summary,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    sessions: {
      type: 'int',
      default: 0
    },
    domains: {
      type: 'int',
      default: 0
    },
    sites: {
      type: 'int',
      default: 0
    },
    tags: {
      type: 'int',
      default: 0
    },
    shorts: {
      type: 'int',
      default: 0
    },
    pixels: {
      type: 'int',
      default: 0
    },
    qrs: {
      type: 'int',
      default: 0
    },
    events: {
      type: 'int',
      default: 0
    },
    tokens: {
      type: 'int',
      default: 0
    },
    assets: {
      type: 'int',
      default: 0
    },
    createdAt: {
      type: 'timestamp',
      createDate: true
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true
    }
  },
  relations: {
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
      inverseSide: 'summaries',
      onDelete: 'SET NULL',
      joinColumn: true
    }
  }
});

import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';

export default interface Usage {
  id: number;

  shorts: number;
  events: number;

  pixels: number;
  qrs: number;
  sites: number;
  domains: number;
  members: number;
  overage: number;
  strikes: number;
  tokens: number;

  organisation: Organisation;

  resetAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Usage {
  constructor() {
    this.resetAt = new Date();
    this.resetAt.setDate(this.resetAt.getDate() + 30);
  }
}

export const UsageSchema = new EntitySchema<Usage>({
  name: 'Usage',
  target: Usage,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    domains: {
      type: 'int',
      default: 0
    },
    sites: {
      type: 'int',
      default: 0
    },
    members: {
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
    overage: {
      type: 'int',
      default: 0
    },
    strikes: {
      type: 'int',
      default: 0
    },
    tokens: {
      type: 'int',
      default: 0
    },
    resetAt: {
      type: 'timestamp',
      createDate: true
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
      type: 'one-to-one',
      target: 'Organisation',
      inverseSide: 'usage',
      onDelete: 'SET NULL',
      joinColumn: true
    }
  }
});

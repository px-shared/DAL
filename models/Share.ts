import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import User from './User';

export default interface Share {
  id: string;

  token: string;
  active: boolean;
  filter: any;
  rangeStart: Date;
  rangeEnd: Date;

  user: User;
  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Share {
  constructor(token: string) {
    this.token = token;
  }
}

export const ShareSchema = new EntitySchema<Share>({
  name: 'Share',
  target: Share,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    token: {
      type: 'varchar',
      length: 256,
      nullable: true
    },
    active: {
      type: 'boolean',
      default: true
    },
    filter: {
      type: 'simple-json',
      nullable: true
    },
    rangeStart: {
      type: 'timestamp',
      nullable: true
    },
    rangeEnd: {
      type: 'timestamp',
      nullable: true
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      select: false
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
      select: true
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
      select: false
    }
  },
  indices: [
    {
      name: 'IDX_token',
      columns: ['token']
    }
  ],
  relations: {
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
      inverseSide: 'shorts',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'pixels',
      onDelete: 'SET NULL'
    }
  }
});

import { EntitySchema } from 'typeorm';

import Organisation from './Organisation';
import Workspace from './Workspace';
import Short from './Short';
import User from './User';

export default interface Site {
  id: number;

  reference: string;
  preview: string;
  data: any;

  user: User;
  workspace: Workspace;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Site {
  // @ts-ignore
  public static name = 'Site';
}

export const SiteSchema = new EntitySchema<Site>({
  name: 'Site',
  target: Site,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    reference: {
      type: 'varchar',
      nullable: false
    },
    preview: {
      type: 'varchar',
      nullable: true
    },
    data: {
      type: 'simple-json',
      nullable: false
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      select: false
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
      select: false
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
      select: false
    }
  },
  relations: {
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'sites',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'sites',
      onDelete: 'SET NULL'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      inverseSide: 'site'
    }
  }
});

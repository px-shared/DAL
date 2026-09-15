import { EntitySchema } from 'typeorm';

import Organisation from './Organisation';
import Workspace from './Workspace';

import User from './User';
import { named } from './named';

export default interface Asset {
  id: number;

  resource: string;
  reference: string;

  user: User;
  workspace: Workspace;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Asset {}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(Asset, 'Asset');

export const AssetSchema = new EntitySchema<Asset>({
  name: 'Asset',
  target: Asset,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    resource: {
      type: 'varchar',
      nullable: false
    },
    reference: {
      type: 'varchar',
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
      inverseSide: 'assets',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'assets',
      onDelete: 'SET NULL'
    }
  }
});

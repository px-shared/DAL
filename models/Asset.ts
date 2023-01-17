import { EntitySchema } from 'typeorm';

import Organisation from './Organisation';

import User from './User';

export default interface Asset {
  id: number;

  resource: string;
  reference: string;

  user: User;
  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Asset {}

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
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
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

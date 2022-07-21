import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import User from './User';

export default interface AccessToken {
  id: string;

  name: string;
  token: string;
  permissions: any;
  expires: Date;
  accessedAt: Date;

  user: User;
  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class AccessToken {}

export const AccessTokenSchema = new EntitySchema<AccessToken>({
  name: 'AccessToken',
  target: AccessToken,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    name: {
      type: 'varchar',
      length: 64,
      nullable: false
    },
    token: {
      type: 'varchar',
      unique: true
    },
    permissions: {
      type: 'simple-json',
      nullable: true
    },
    expires: {
      type: 'timestamp'
    },
    accessedAt: {
      type: 'timestamp'
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
      inverseSide: 'tags',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'tags',
      onDelete: 'SET NULL'
    }
  }
});

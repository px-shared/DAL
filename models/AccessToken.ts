import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import User from './User';

export default interface AccessToken {
  id: number;

  name: string;
  token: string;
  permissions: any;
  expires: Date;
  accessedAt: Date;

  user: User;
  workspace: Workspace;

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
      unique: true,
      select: false
    },
    permissions: {
      type: 'simple-json',
      nullable: true
    },
    expires: {
      type: 'timestamp',
      nullable: true
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
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'accessTokens',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'accessTokens',
      onDelete: 'SET NULL'
    }
  }
});

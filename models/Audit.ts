import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import User from './User';

export default interface Audit {
  id: number;

  action: 'INSERT' | 'UPDATE' | 'REMOVE';
  entity: string;
  entityId: number | string;
  payload: object;
  performedAt: Date;

  user: User;
  workspace: Workspace;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Audit {
  constructor(
    action: 'INSERT' | 'UPDATE' | 'REMOVE',
    entity: string,
    entityId: number | string,
    payload: object,
    user: User,
    workspace: Workspace
  ) {
    this.action = action;
    this.entity = entity;
    this.entityId = entityId;
    this.user = user;
    this.workspace = workspace;
    this.payload = payload;
  }
}

export const AuditSchema = new EntitySchema<Audit>({
  name: 'Audit',
  target: Audit,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    action: {
      type: 'varchar'
    },
    entity: {
      type: 'varchar'
    },
    entityId: {
      type: 'varchar',
      nullable: true
    },
    payload: {
      type: 'simple-json',
      nullable: true
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
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'audit',
      onDelete: 'SET NULL'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'audit',
      onDelete: 'SET NULL'
    }
  },
  indices: [
    {
      name: 'entity-idx',
      columns: ['entity', 'action']
    }
  ]
});

import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import User from './User';

export default interface Audit {
  id: number;

  action: 'INSERT' | 'UPDATE' | 'REMOVE';
  entity: string;
  entityId: number | string;
  payload: object;
  performedAt: Date;

  user: User;
  organisation: Organisation;

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
    organisation: Organisation
  ) {
    this.action = action;
    this.entity = entity;
    this.entityId = entityId;
    this.user = user;
    this.organisation = organisation;
    this.payload = { ...payload, user: undefined, organisation: undefined };
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
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
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

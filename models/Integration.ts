import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import User from './User';

export default interface Integration {
  id: number;

  provider: string;
  data: any;
  token: string;
  secret: string;
  endpoint: string;

  errorMessage: string;

  expires: Date;
  accessedAt: Date;

  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Integration {}

export const IntegrationSchema = new EntitySchema<Integration>({
  name: 'Integration',
  target: Integration,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    provider: {
      type: 'varchar',
      length: 64,
      nullable: false
    },
    data: {
      type: 'simple-json',
      nullable: true
    },
    token: {
      type: 'varchar',
      select: false,
      nullable: true
    },
    secret: {
      type: 'varchar',
      select: false,
      nullable: true
    },
    endpoint: {
      type: 'varchar',
      nullable: true
    },
    errorMessage: {
      type: 'varchar',
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
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
      inverseSide: 'integrations',
      onDelete: 'CASCADE'
    }
  }
});

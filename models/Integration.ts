import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import { named } from './named';

export default interface Integration {
  id: number;

  provider: string;
  data: any;
  token: string;
  refresh: string;
  endpoint: string;

  errorMessage: string;

  expires: Date;
  accessedAt: Date;

  workspace: Workspace;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Integration {}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(Integration, 'Integration');

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
      nullable: true
    },
    refresh: {
      type: 'varchar',
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
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'integrations',
      onDelete: 'CASCADE'
    }
  }
});

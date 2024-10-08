import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import User from './User';
import Short from './Short';
import Defaults from './Defaults';

export default interface Domain {
  id: string;
  verified: boolean;
  error: string;

  user: User;
  defaults: Defaults[];
  workspace: Workspace;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Domain {
  // @ts-ignore
  public static name = 'Domain';
  constructor(name: string) {
    this.id = name;
  }
}

export const DomainSchema = new EntitySchema<Domain>({
  name: 'Domain',
  target: Domain,
  columns: {
    id: {
      type: 'varchar',
      primary: true
    },
    verified: {
      type: 'boolean',
      default: false
    },
    error: {
      type: 'varchar',
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
      inverseSide: 'domains',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'domains',
      onDelete: 'SET NULL'
    },
    defaults: {
      type: 'one-to-many',
      target: 'Defaults',
      inverseSide: 'domain'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      inverseSide: 'domain'
    }
  }
});

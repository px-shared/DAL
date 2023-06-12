import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Short from './Short';

export default interface Workspace {
  id: number;

  name: string;

  shorts: Short[];
  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Workspace {}

export const WorkspaceSchema = new EntitySchema<Workspace>({
  name: 'Workspace',
  target: Workspace,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
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
      inverseSide: 'workspaces',
      onDelete: 'CASCADE'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      cascade: true,
      inverseSide: 'workspace'
    }
  }
});

import { EntitySchema } from 'typeorm';

import Organisation from './Organisation';
import Workspace from './Workspace';

import User from './User';
import { named } from './named';

export default interface Generation {
  id: number;

  prompt: string;

  user: User;
  workspace: Workspace;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Generation {}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(Generation, 'Generation');

export const GenerationSchema = new EntitySchema<Generation>({
  name: 'Generation',
  target: Generation,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    prompt: {
      type: 'varchar',
      nullable: false
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      select: true
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
      inverseSide: 'generations',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'generations',
      onDelete: 'SET NULL'
    }
  }
});

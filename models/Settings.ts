import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import { named } from './named';

export default interface Settings {
  id: number;

  safeguard: boolean;

  workspace: Workspace;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Settings {}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(Settings, 'Settings');

export const SettingsSchema = new EntitySchema<Settings>({
  name: 'Settings',
  target: Settings,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    safeguard: {
      type: 'boolean',
      default: true
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
      type: 'one-to-one',
      target: 'Workspace',
      inverseSide: 'settings',
      joinColumn: true,
      onDelete: 'CASCADE'
    }
  }
});

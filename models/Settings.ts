import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';

export default interface Settings {
  id: number;

  safeguard: boolean;

  organisation: Organisation;
  workspace: Workspace;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Settings {}

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
    organisation: {
      type: 'one-to-one',
      target: 'Organisation',
      inverseSide: 'settings',
      joinColumn: true,
      onDelete: 'CASCADE'
    },
    workspace: {
      type: 'one-to-one',
      target: 'Workspace',
      inverseSide: 'settings',
      joinColumn: true,
      onDelete: 'CASCADE'
    }
  }
});

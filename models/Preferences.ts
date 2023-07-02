import { EntitySchema } from 'typeorm';
import User from './User';

export default interface Preferences {
  id: number;

  compactUserInterface: boolean;
  darkMode: boolean;
  updates: boolean;
  alerts: boolean;
  report: boolean;

  user: User;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Preferences {}

export const PreferencesSchema = new EntitySchema<Preferences>({
  name: 'Preferences',
  target: Preferences,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    compactUserInterface: {
      type: 'boolean',
      default: false
    },
    darkMode: {
      type: 'boolean',
      default: false
    },
    updates: {
      type: 'boolean',
      default: true
    },
    alerts: {
      type: 'boolean',
      default: true
    },
    report: {
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
    user: {
      type: 'one-to-one',
      target: 'User',
      inverseSide: 'preferences',
      joinColumn: true,
      onDelete: 'CASCADE'
    }
  }
});

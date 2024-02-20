import { EntitySchema } from 'typeorm';
import Domain from './Domain';
import Pixel from './Pixel';
import QR from './QR';
import Tag from './Tag';
import User from './User';
import Workspace from './Workspace';

export default interface Defaults {
  id: number;

  domain: Domain;
  pixel: Pixel;
  tag: Tag;
  qr: QR;

  workspace: Workspace;
  user: User;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Defaults {}

export const DefaultsSchema = new EntitySchema<Defaults>({
  name: 'Defaults',
  target: Defaults,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
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
    domain: {
      type: 'many-to-one',
      target: 'Domain',
      inverseSide: 'defaults',
      eager: true,
      onDelete: 'SET NULL'
    },
    pixel: {
      type: 'many-to-one',
      target: 'Pixel',
      inverseSide: 'defaults',
      eager: true,
      onDelete: 'SET NULL'
    },
    qr: {
      type: 'many-to-one',
      target: 'QR',
      inverseSide: 'defaults',
      eager: true,
      onDelete: 'SET NULL'
    },
    tag: {
      type: 'many-to-one',
      target: 'Tag',
      inverseSide: 'defaults',
      eager: true,
      onDelete: 'SET NULL'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'defaults',
      onDelete: 'CASCADE'
    },
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'defaults',
      onDelete: 'CASCADE'
    }
  }
});

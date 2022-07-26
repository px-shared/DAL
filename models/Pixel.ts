import { EntitySchema } from 'typeorm';
import Defaults from './Defaults';
import Organisation from './Organisation';
import Short from './Short';
import User from './User';

export default interface Pixel {
  id: number;

  provider: string;
  identifier: string;
  reference: string;

  user: User;
  defaults: Defaults;
  organisation: Organisation;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Pixel {}

export const PixelSchema = new EntitySchema<Pixel>({
  name: 'Pixel',
  target: Pixel,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    provider: {
      type: 'varchar',
      nullable: false
    },
    identifier: {
      type: 'varchar',
      nullable: false
    },
    reference: {
      type: 'varchar',
      nullable: false
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
      inverseSide: 'pixels',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'pixels',
      onDelete: 'SET NULL'
    },
    defaults: {
      type: 'one-to-one',
      target: 'Defaults',
      inverseSide: 'pixel',
      onDelete: 'SET NULL'
    },
    shorts: {
      type: 'many-to-many',
      target: 'Short',
      inverseSide: 'pixels',
      onDelete: 'CASCADE'
    }
  }
});

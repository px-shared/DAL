import { EntitySchema } from 'typeorm';
import Domain from './Domain';
import Pixel from './Pixel';
import Tag from './Tag';
import User from './User';

export default interface Defaults {
  id: number;

  domain: Domain;
  pixel: Pixel;
  tag: Tag;

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
      type: 'one-to-one',
      target: 'Domain',
      inverseSide: 'defaults',
      joinColumn: true,
      eager: true,
      onDelete: 'SET NULL'
    },
    pixel: {
      type: 'one-to-one',
      target: 'Pixel',
      inverseSide: 'defaults',
      joinColumn: true,
      eager: true,
      onDelete: 'SET NULL'
    },
    tag: {
      type: 'one-to-one',
      target: 'Tag',
      inverseSide: 'defaults',
      joinColumn: true,
      eager: true,
      onDelete: 'SET NULL'
    },
    user: {
      type: 'one-to-one',
      target: 'User',
      inverseSide: 'defaults',
      joinColumn: true,
      onDelete: 'CASCADE'
    }
  }
});

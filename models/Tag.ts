import { EntitySchema } from 'typeorm';
import Defaults from './Defaults';
import Organisation from './Organisation';
import Short from './Short';
import User from './User';

export default interface Tag {
  id: string;

  name: string;

  user: User;
  defaults: Defaults;
  organisation: Organisation;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Tag {}

export const TagSchema = new EntitySchema<Tag>({
  name: 'Tag',
  target: Tag,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    name: {
      type: 'varchar',
      length: 64,
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
      inverseSide: 'tags',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'tags',
      onDelete: 'SET NULL'
    },
    defaults: {
      type: 'one-to-one',
      target: 'Defaults',
      inverseSide: 'tag',
      onDelete: 'SET NULL'
    },
    shorts: {
      type: 'many-to-many',
      target: 'Short',
      inverseSide: 'tags',
      onDelete: 'CASCADE'
    }
  }
});

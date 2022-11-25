import { EntitySchema } from 'typeorm';
import Defaults from './Defaults';
import Organisation from './Organisation';
import Short from './Short';
import User from './User';

export default interface Site {
  id: number;

  reference: string;
  data: any;

  user: User;
  defaults: Defaults;
  organisation: Organisation;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Site {}

export const SiteSchema = new EntitySchema<Site>({
  name: 'Site',
  target: Site,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    reference: {
      type: 'varchar',
      nullable: false
    },
    data: {
      type: 'simple-json',
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
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
      inverseSide: 'sites',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'sites',
      onDelete: 'SET NULL'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      inverseSide: 'site'
    }
  }
});

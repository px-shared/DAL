import { EntitySchema } from 'typeorm';
import Domain from './Domain';
import Organisation from './Organisation';
import Pixel from './Pixel';
import Session from './Session';
import User from './User';
import Tag from './Tag';

export default interface Short {
  id: string;

  route: string;
  active: boolean;
  consent: boolean;
  favourite: boolean;
  destination: string;
  title: string;
  description: string;
  image: string;
  favicon: string;
  meta: any;
  parameters: any;
  clicks: number;

  domain: Domain;
  user: User;
  organisation: Organisation;
  sessions: Session[];
  tags: Tag[];
  pixels: Pixel[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  build: Function;
}

export default class Short {}

Short.prototype.build = function () {
  console.log('this', this);
};

export const ShortSchema = new EntitySchema<Short>({
  name: 'Short',
  target: Short,
  columns: {
    id: {
      type: 'varchar',
      primary: true
    },
    route: {
      type: 'varchar',
      length: 32,
      nullable: true
    },
    active: {
      type: 'boolean',
      default: true
    },
    consent: {
      type: 'boolean',
      default: false
    },
    favourite: {
      type: 'boolean',
      default: false
    },
    destination: {
      type: 'varchar'
    },
    title: {
      type: 'varchar',
      default: 'Redirect',
      nullable: true
    },
    description: {
      type: 'varchar',
      nullable: true
    },
    image: {
      type: 'varchar',
      nullable: true
    },
    favicon: {
      type: 'varchar',
      nullable: true
    },
    meta: {
      type: 'simple-json',
      nullable: true
    },
    parameters: {
      type: 'simple-json',
      nullable: true
    },
    clicks: {
      type: 'int',
      default: 0
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      select: false
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
      select: true
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
      select: false
    }
  },
  indices: [
    {
      name: 'IDX_user',
      columns: ['user', 'organisation']
    },
    {
      name: 'IDX_organisation',
      columns: ['organisation']
    }
  ],
  relations: {
    domain: {
      type: 'many-to-one',
      target: 'Domain',
      inverseSide: 'shorts',
      onDelete: 'CASCADE'
    },
    organisation: {
      type: 'many-to-one',
      target: 'Organisation',
      inverseSide: 'shorts',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'pixels',
      onDelete: 'SET NULL'
    },
    sessions: {
      type: 'one-to-many',
      target: 'Session',
      inverseSide: 'short',
      cascade: true
    },
    tags: {
      type: 'many-to-many',
      target: 'Tag',
      inverseSide: 'shorts',
      cascade: true,
      joinTable: true
    },
    pixels: {
      type: 'many-to-many',
      target: 'Pixel',
      inverseSide: 'shorts',
      cascade: true,
      joinTable: true
    }
  }
});

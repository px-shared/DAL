import { EntitySchema } from 'typeorm';
import Domain from './Domain';
import Organisation from './Organisation';
import Workspace from './Workspace';
import Pixel from './Pixel';
import User from './User';
import Tag from './Tag';
import QR from './QR';
import Site from './Site';
import Segment from './Segment';

export default interface Short {
  id: string;

  route: string;
  api: boolean;
  type: string;
  active: boolean;
  transitive: boolean;
  consent: boolean;
  favourite: boolean;
  destination: string;
  title: string;
  description: string;
  redirect: string;
  error: string;
  image: string;
  favicon: string;
  meta: any;
  parameters: any;
  conditions: any;
  events: number;
  clicks: number;

  domain: Domain;
  user: User;
  workspace: Workspace;
  tags: Tag[];
  segments: Segment[];
  pixels: Pixel[];
  qr: QR;
  site: Site;

  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  build: Function;
}

export default class Short {
  // @ts-ignore
  public static name = 'Short';
}

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
      length: 64,
      nullable: true
    },
    api: {
      type: 'boolean',
      default: false
    },
    active: {
      type: 'boolean',
      default: true
    },
    transitive: {
      type: 'boolean',
      default: false
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
    redirect: {
      type: 'varchar',
      nullable: true
    },
    type: {
      type: 'varchar',
      default: 'URL'
    },
    error: {
      type: 'varchar',
      nullable: true
    },
    title: {
      type: 'varchar',
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
    conditions: {
      type: 'simple-json',
      nullable: true
    },
    clicks: {
      type: 'int',
      default: 0
    },
    events: {
      type: 'int',
      default: 0
    },
    publishedAt: {
      type: 'timestamp',
      createDate: true
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
      select: true
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
      select: true
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
      select: true
    }
  },
  relations: {
    domain: {
      type: 'many-to-one',
      target: 'Domain',
      inverseSide: 'shorts',
      onDelete: 'CASCADE'
    },
    qr: {
      type: 'many-to-one',
      target: 'QR',
      inverseSide: 'shorts',
      onDelete: 'SET NULL'
    },
    site: {
      type: 'many-to-one',
      target: 'Site',
      inverseSide: 'shorts',
      onDelete: 'SET NULL'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'shorts',
      onDelete: 'SET NULL'
    },
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'shorts',
      onDelete: 'SET NULL'
    },
    tags: {
      type: 'many-to-many',
      target: 'Tag',
      inverseSide: 'shorts',
      cascade: true,
      joinTable: true
    },
    segments: {
      type: 'many-to-many',
      target: 'Segment',
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

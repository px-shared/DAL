import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Short from './Short';
import AccessToken from './AccessToken';
import Asset from './Asset';
import Audit from './Audit';
import Domain from './Domain';
import Integration from './Integration';
import Pixel from './Pixel';
import QR from './QR';
import Segment from './Segment';
import Settings from './Settings';
import Site from './Site';
import Tag from './Tag';
import User from './User';

export default interface Workspace {
  id: number;

  name: string;

  settings: Settings;
  organisation: Organisation;

  tags: Tag[];
  audit: Audit[];
  segments: Segment[];
  users: User[];
  shorts: Short[];
  assets: Asset[];
  pixels: Pixel[];
  domains: Domain[];
  qrs: QR[];
  sites: Site[];
  accessTokens: AccessToken[];
  integrations: Integration[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Workspace {}

export const WorkspaceSchema = new EntitySchema<Workspace>({
  name: 'Workspace',
  target: Workspace,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
      nullable: true
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
      type: 'many-to-one',
      target: 'Organisation',
      inverseSide: 'workspaces',
      onDelete: 'CASCADE'
    },
    users: {
      type: 'many-to-many',
      target: 'User',
      inverseSide: 'workspaces',
      cascade: true,
      joinTable: true
    },
    settings: {
      type: 'one-to-one',
      target: 'Settings',
      cascade: true,
      inverseSide: 'workspace'
    },
    domains: {
      type: 'one-to-many',
      target: 'Domain',
      cascade: true,
      inverseSide: 'workspace'
    },
    accessTokens: {
      type: 'one-to-many',
      target: 'AccessToken',
      cascade: true,
      inverseSide: 'workspace'
    },
    integrations: {
      type: 'one-to-many',
      target: 'Integration',
      cascade: true,
      inverseSide: 'workspace'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      cascade: true,
      inverseSide: 'workspace'
    },
    tags: {
      type: 'one-to-many',
      target: 'Tag',
      cascade: true,
      inverseSide: 'workspace'
    },
    segments: {
      type: 'one-to-many',
      target: 'Segment',
      cascade: true,
      inverseSide: 'workspace'
    },
    pixels: {
      type: 'one-to-many',
      target: 'Pixel',
      cascade: true,
      inverseSide: 'workspace'
    },
    assets: {
      type: 'one-to-many',
      target: 'Asset',
      cascade: true,
      inverseSide: 'workspace'
    },
    qrs: {
      type: 'one-to-many',
      target: 'QR',
      cascade: true,
      inverseSide: 'workspace'
    },
    sites: {
      type: 'one-to-many',
      target: 'Site',
      cascade: true,
      inverseSide: 'workspace'
    },
    audit: {
      type: 'one-to-many',
      target: 'Audit',
      cascade: true,
      inverseSide: 'workspace'
    }
  }
});

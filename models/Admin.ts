import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';

export default interface Admin {
  id: number;

  sessions: number;
  sessionsDelta: number;
  shorts: number;
  shortsDelta: number;
  events: number;
  eventsDelta: number;
  pixels: number;
  pixelsDelta: number;
  qrs: number;
  qrsDelta: number;
  sites: number;
  sitesDelta: number;
  workspaces: number;
  workspacesDelta: number;
  domains: number;
  domainsDelta: number;
  members: number;
  membersDelta: number;
  overage: number;
  overageDelta: number;
  strikes: number;
  strikesDelta: number;
  tokens: number;
  tokensDelta: number;
  assets: number;
  assetsDelta: number;
  users: number;
  usersDelta: number;
  organisations: number;
  organisationsDelta: number;
  generations: number;
  generationsDelta: number;

  organisation: Organisation;

  reportedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Admin {
  constructor() {}
}

export const AdminSchema = new EntitySchema<Admin>({
  name: 'Admin',
  target: Admin,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    sessions: {
      type: 'int',
      default: 0
    },
    domains: {
      type: 'int',
      default: 0
    },
    sites: {
      type: 'int',
      default: 0
    },
    members: {
      type: 'int',
      default: 0
    },
    shorts: {
      type: 'int',
      default: 0
    },
    pixels: {
      type: 'int',
      default: 0
    },
    qrs: {
      type: 'int',
      default: 0
    },
    events: {
      type: 'int',
      default: 0
    },
    workspaces: {
      type: 'int',
      default: 0
    },
    overage: {
      type: 'int',
      default: 0
    },
    strikes: {
      type: 'int',
      default: 0
    },
    tokens: {
      type: 'int',
      default: 0
    },
    assets: {
      type: 'int',
      default: 0
    },
    users: {
      type: 'int',
      default: 0
    },
    organisations: {
      type: 'int',
      default: 0
    },
    generations: {
      type: 'int',
      default: 0
    },
    sessionsDelta: {
      type: 'int',
      default: 0
    },
    domainsDelta: {
      type: 'int',
      default: 0
    },
    sitesDelta: {
      type: 'int',
      default: 0
    },
    membersDelta: {
      type: 'int',
      default: 0
    },
    shortsDelta: {
      type: 'int',
      default: 0
    },
    pixelsDelta: {
      type: 'int',
      default: 0
    },
    qrsDelta: {
      type: 'int',
      default: 0
    },
    eventsDelta: {
      type: 'int',
      default: 0
    },
    workspacesDelta: {
      type: 'int',
      default: 0
    },
    overageDelta: {
      type: 'int',
      default: 0
    },
    strikesDelta: {
      type: 'int',
      default: 0
    },
    tokensDelta: {
      type: 'int',
      default: 0
    },
    assetsDelta: {
      type: 'int',
      default: 0
    },
    usersDelta: {
      type: 'int',
      default: 0
    },
    organisationsDelta: {
      type: 'int',
      default: 0
    },
    generationsDelta: {
      type: 'int',
      default: 0
    },
    reportedAt: {
      type: 'timestamp',
      createDate: true
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
  }
});

import { EntitySchema } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import AccessToken from './AccessToken';
import Asset from './Asset';
import Domain from './Domain';
import Integration from './Integration';
import Pixel from './Pixel';
import QR from './QR';
import Segment from './Segment';
import Settings from './Settings';
import Short from './Short';
import Site from './Site';
import Subscription from './Subscription';
import Tag from './Tag';
import Usage from './Usage';
import User from './User';
import Audit from './Audit';
import Workspace from './Workspace';

export default interface Organisation {
  id: string;
  paymentProviderCustomerId: string;

  companyEmail: string;
  companySupport: string;
  companyName: string;
  companySize: string;
  industry: string;
  website: string;
  terms: string;
  logo: string;
  developer: boolean;
  attribution: string;

  usage: Usage;
  subscription: Subscription;

  users: User[];
  workspaces: Workspace[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Organisation {
  constructor(companyEmail: string) {
    this.id = uuidv4();
    this.companyEmail = companyEmail;
  }
}

export const OrganisationSchema = new EntitySchema<Organisation>({
  name: 'Organisation',
  target: Organisation,
  columns: {
    id: {
      type: 'varchar',
      primary: true
    },
    paymentProviderCustomerId: {
      type: 'varchar',
      length: 256,
      nullable: true,
      unique: true
    },
    companyEmail: {
      type: 'varchar',
      unique: true
    },
    companySupport: {
      type: 'varchar',
      nullable: true
    },
    companyName: {
      type: 'varchar',
      nullable: true
    },
    companySize: {
      type: 'varchar',
      nullable: true
    },
    industry: {
      type: 'varchar',
      nullable: true
    },
    website: {
      type: 'varchar',
      nullable: true
    },
    terms: {
      type: 'varchar',
      nullable: true
    },
    logo: {
      type: 'varchar',
      nullable: true
    },
    attribution: {
      type: 'varchar',
      nullable: true
    },
    developer: {
      type: 'boolean',
      default: false
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
    users: {
      type: 'one-to-many',
      target: 'User',
      cascade: true,
      inverseSide: 'organisation'
    },
    workspaces: {
      type: 'one-to-many',
      target: 'Workspace',
      cascade: true,
      inverseSide: 'organisation'
    },
    usage: {
      type: 'one-to-one',
      target: 'Usage',
      cascade: true,
      inverseSide: 'organisation'
    },
    subscription: {
      type: 'one-to-one',
      target: 'Subscription',
      cascade: true,
      inverseSide: 'organisation'
    }
  }
});

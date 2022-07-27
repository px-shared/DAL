import { EntitySchema } from 'typeorm';
import Preferences from './Preferences';
import Feedback from './Feedback';
import Organisation from './Organisation';
import bcrypt from 'bcrypt';
import Verification from './Verification';
import Tag from './Tag';
import Short from './Short';
import Pixel from './Pixel';
import Domain from './Domain';
import Defaults from './Defaults';
import AccessToken from './AccessToken';

export default interface User {
  id: number;

  name: string;
  email: string;
  password: string;
  verified: Date;
  ipAddress: string;
  role: 'owner' | 'administrator' | 'user';

  feedback: Feedback[];
  verifications: Verification[];
  tags: Tag[];
  shorts: Short[];
  pixels: Pixel[];
  domains: Domain[];
  accessTokens: AccessToken[];

  defaults: Defaults;
  preferences: Preferences;
  organisation: Organisation;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class User {
  constructor(email: string, verified: Date) {
    this.email = email;
    this.verified = verified;
  }
}

export function hash(password: string) {
  return bcrypt.hash(password, 10);
}

export function compare(comparison: string, hash: string) {
  return bcrypt.compare(comparison, hash);
}

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
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
    role: {
      type: 'varchar',
      default: 'user'
    },
    email: {
      type: 'varchar',
      unique: true
    },
    password: {
      type: 'varchar',
      select: false
    },
    ipAddress: {
      type: 'varchar',
      nullable: true
    },
    verified: {
      // Contains a timestamp of the last time an action was performed that
      // confirmed this email address was active and used by the user (e.g.
      // when an email sign in link is clicked on and verified). Is null
      // if the email address specified has never been verified.
      type: 'timestamp',
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
      inverseSide: 'user',
      onDelete: 'CASCADE'
    },
    preferences: {
      type: 'one-to-one',
      target: 'Preferences',
      cascade: true,
      inverseSide: 'user'
    },
    defaults: {
      type: 'one-to-one',
      target: 'Defaults',
      cascade: true,
      inverseSide: 'user'
    },
    feedback: {
      type: 'one-to-many',
      target: 'Feedback',
      cascade: true,
      inverseSide: 'user'
    },
    verifications: {
      type: 'one-to-many',
      target: 'Verification',
      cascade: true,
      inverseSide: 'user'
    },
    tags: {
      type: 'one-to-many',
      target: 'Tag',
      cascade: true,
      inverseSide: 'user'
    },
    pixels: {
      type: 'one-to-many',
      target: 'Pixel',
      cascade: true,
      inverseSide: 'user'
    },
    domains: {
      type: 'one-to-many',
      target: 'Domain',
      cascade: true,
      inverseSide: 'user'
    },
    accessTokens: {
      type: 'one-to-many',
      target: 'AccessToken',
      cascade: true,
      inverseSide: 'user'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      cascade: true,
      inverseSide: 'user'
    }
  }
});

import { EntitySchema } from 'typeorm';
import User from './User';

export default interface Verification {
  id: number;

  token: string;
  expires: Date;
  changes: any;

  user: User;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

// This model is used for sign in emails, but is designed to support other
// mechanisms in future (e.g. 2FA via text message or short codes)
export default class Verification {
  // @ts-ignore
  public static name = 'Verification';
  constructor(token: string) {
    this.token = token;
    this.expires = new Date();
    this.expires.setDate(this.expires.getDate() + 7);
  }
}

export const VerificationSchema = new EntitySchema<Verification>({
  name: 'Verification',
  target: Verification,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    token: {
      // The token used verify the request (maybe hashed or encrypted)
      type: 'varchar',
      unique: true
    },
    expires: {
      // After this time, the request will no longer be valid
      type: 'timestamp'
    },
    changes: {
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
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'verifications',
      onDelete: 'CASCADE'
    }
  }
});

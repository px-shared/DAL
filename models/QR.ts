import { EntitySchema } from 'typeorm';
import Defaults from './Defaults';
import Organisation from './Organisation';
import Workspace from './Workspace';
import Short from './Short';
import User from './User';

export default interface QR {
  id: number;

  reference: string;
  errorCorrectionLevel: string;
  margin: number;
  format: any;

  user: User;
  defaults: Defaults[];
  organisation: Organisation;
  workspace: Workspace;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class QR {}

export const QRSchema = new EntitySchema<QR>({
  name: 'QR',
  target: QR,
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
    errorCorrectionLevel: {
      type: 'varchar',
      nullable: false
    },
    margin: {
      type: 'int',
      default: 1
    },
    format: {
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
      inverseSide: 'qrs',
      onDelete: 'CASCADE'
    },
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
      inverseSide: 'qrs',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'qrs',
      onDelete: 'SET NULL'
    },
    defaults: {
      type: 'one-to-many',
      target: 'Defaults',
      inverseSide: 'qr'
    },
    shorts: {
      type: 'one-to-many',
      target: 'Short',
      inverseSide: 'qr'
    }
  }
});

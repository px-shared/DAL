import { EntitySchema } from 'typeorm';
import Defaults from './Defaults';
import Organisation from './Organisation';
import Workspace from './Workspace';
import Short from './Short';
import User from './User';
import { named } from './named';

export default interface QR {
  id: number;

  reference: string;
  errorCorrectionLevel: string;
  margin: number;
  format: any;

  user: User;
  defaults: Defaults[];
  workspace: Workspace;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class QR {}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(QR, 'QR');

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

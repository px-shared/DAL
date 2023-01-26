import { EntitySchema } from 'typeorm';
import Defaults from './Defaults';
import Organisation from './Organisation';
import Short from './Short';
import User from './User';

export default interface Segment {
  id: string;

  name: string;
  ruleset: any;

  user: User;
  organisation: Organisation;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Segment {}

export const SegmentSchema = new EntitySchema<Segment>({
  name: 'Segment',
  target: Segment,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    name: {
      type: 'varchar',
      length: 64,
      nullable: false
    },
    ruleset: {
      type: 'simple-json',
      nullable: false
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
      inverseSide: 'segments',
      onDelete: 'CASCADE'
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'segments',
      onDelete: 'SET NULL'
    },
    shorts: {
      type: 'many-to-many',
      target: 'Short',
      inverseSide: 'segments',
      onDelete: 'CASCADE'
    }
  }
});

// {
//   "operator": "OR", // OR, AND
//   "rules": [
//     {
//       "member": "tag", // tag, destination, shortId, UTMs, owner
//       "operator": "exact", // exact, starts, ends, contains
//       "target": "example"
//     },
//     {
//       "member": "destination",
//       "operator": "contains",
//       "target": "example"
//     }
//   ]
// }

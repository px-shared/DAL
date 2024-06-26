import { EntitySchema } from 'typeorm';

import Organisation from './Organisation';
import Workspace from './Workspace';
import Short from './Short';
import User from './User';

export default interface Segment {
  id: number;

  name: string;
  ruleset: any;

  user: User;
  workspace: Workspace;
  shorts: Short[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Segment {
  // @ts-ignore
  public static name = 'Segment';
}

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
    workspace: {
      type: 'many-to-one',
      target: 'Workspace',
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
//   "operator": "OR",
//   "rules": [
//     {
//       "member": "tag",
//       "operator": "exact",
//       "target": "example"
//     },
//     {
//       "member": "destination",
//       "operator": "contains",
//       "target": "example"
//     }
//   ]
// }

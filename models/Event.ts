import { EntitySchema } from 'typeorm';
import Session from './Session';

export default interface Event {
  id: number;

  path: string;
  action: string;
  cookies: string;
  performedAt: number;
  priorDelay: number;
  properties: any;
  cfid: string;
  uid: string;

  session: Session;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Event {}

export const EventSchema = new EntitySchema<Event>({
  name: 'Event',
  target: Event,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    path: {
      type: 'varchar',
      length: 128
    },
    action: {
      type: 'varchar',
      length: 64
    },
    cookies: {
      type: 'varchar',
      length: 64
    },
    performedAt: {
      type: 'bigint'
    },
    priorDelay: {
      type: 'bigint'
    },
    properties: {
      type: 'simple-json'
    },
    cfid: {
      type: 'varchar',
      nullable: true
    },
    uid: {
      type: 'varchar',
      nullable: true,
      length: 32
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
    session: {
      type: 'many-to-one',
      target: 'Session',
      inverseSide: 'events',
      onDelete: 'CASCADE'
    }
  }
});

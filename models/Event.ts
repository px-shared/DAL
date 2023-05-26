import { EntitySchema } from 'typeorm';
import Session from './Session';

export default interface Event {
  id: number;

  action: string;
  source: string;
  referrer: string;
  properties: any;
  meta: any;
  performedAt: number;
  cfid: string;

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
    action: {
      type: 'varchar',
      length: 128
    },
    source: {
      type: 'varchar'
    },
    referrer: {
      type: 'varchar',
      nullable: true
    },
    properties: {
      type: 'simple-json',
      nullable: true
    },
    meta: {
      type: 'simple-json',
      nullable: true
    },
    performedAt: {
      type: 'bigint'
    },
    cfid: {
      type: 'varchar'
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

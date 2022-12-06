import { EntitySchema } from 'typeorm';
import Short from './Short';

export default interface Event {
  id: number;

  path: string;
  action: string;
  cookies: string;
  performedAt: number;
  priorDelay: number;
  properties: object;

  short: Short;

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
    short: {
      type: 'many-to-one',
      target: 'Short',
      inverseSide: 'events',
      onDelete: 'CASCADE'
    }
  }
});

import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';

export default interface UsageHourly {
  id: number;

  hour0: number;
  hour1: number;
  hour2: number;
  hour3: number;
  hour4: number;
  hour5: number;
  hour6: number;
  hour7: number;
  hour8: number;
  hour9: number;
  hour10: number;
  hour11: number;
  hour12: number;
  hour13: number;
  hour14: number;
  hour15: number;
  hour16: number;
  hour17: number;
  hour18: number;
  hour19: number;
  hour20: number;
  hour21: number;
  hour22: number;
  hour23: number;
  organisation: Organisation;

  resetAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class UsageHourly {
  // @ts-ignore
  public static name = 'UsageHourly';
  constructor() {
    this.resetAt = new Date();
    this.resetAt.setDate(this.resetAt.getDate() + 1);
  }
}

export const UsageHourlySchema = new EntitySchema<UsageHourly>({
  name: 'UsageHourly',
  target: UsageHourly,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    hour0: {
      type: 'int',
      default: 0
    },
    hour1: {
      type: 'int',
      default: 0
    },
    hour2: {
      type: 'int',
      default: 0
    },
    hour3: {
      type: 'int',
      default: 0
    },
    hour4: {
      type: 'int',
      default: 0
    },
    hour5: {
      type: 'int',
      default: 0
    },
    hour6: {
      type: 'int',
      default: 0
    },
    hour7: {
      type: 'int',
      default: 0
    },
    hour8: {
      type: 'int',
      default: 0
    },
    hour9: {
      type: 'int',
      default: 0
    },
    hour10: {
      type: 'int',
      default: 0
    },
    hour11: {
      type: 'int',
      default: 0
    },
    hour12: {
      type: 'int',
      default: 0
    },
    hour13: {
      type: 'int',
      default: 0
    },
    hour14: {
      type: 'int',
      default: 0
    },
    hour15: {
      type: 'int',
      default: 0
    },
    hour16: {
      type: 'int',
      default: 0
    },
    hour17: {
      type: 'int',
      default: 0
    },
    hour18: {
      type: 'int',
      default: 0
    },
    hour19: {
      type: 'int',
      default: 0
    },
    hour20: {
      type: 'int',
      default: 0
    },
    hour21: {
      type: 'int',
      default: 0
    },
    hour22: {
      type: 'int',
      default: 0
    },
    hour23: {
      type: 'int',
      default: 0
    },
    resetAt: {
      type: 'timestamp',
      createDate: true
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
      type: 'one-to-one',
      target: 'Organisation',
      inverseSide: 'usageHourly',
      onDelete: 'SET NULL',
      joinColumn: true
    }
  }
});

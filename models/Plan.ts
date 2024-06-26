import { EntitySchema } from 'typeorm';
import Subscription from './Subscription';

export default interface Plan {
  providerId: string;
  providerProductId: string;
  product: string;
  interval: string;
  metadata: any;

  subscriptions: Subscription[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Plan {
  // @ts-ignore
  public static name = 'Plan';
  constructor(
    providerId: string,
    providerProductId: string,
    product: string,
    interval: string,
    metadata: any
  ) {
    this.providerId = providerId;
    this.providerProductId = providerProductId;
    this.product = product;
    this.interval = interval;
    this.metadata = metadata;
  }
}

export const PlanSchema = new EntitySchema<Plan>({
  name: 'Plan',
  target: Plan,
  columns: {
    providerId: {
      type: 'varchar',
      length: 256,
      primary: true
    },
    providerProductId: {
      type: 'varchar',
      length: 256,
      nullable: false
    },
    product: {
      type: 'varchar',
      length: 256,
      nullable: false
    },
    interval: {
      type: 'varchar',
      length: 64,
      nullable: false
    },
    metadata: {
      type: 'simple-json',
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
    subscriptions: {
      type: 'one-to-many',
      target: 'Subscription',
      inverseSide: 'plan',
      onDelete: 'SET NULL'
    }
  }
});

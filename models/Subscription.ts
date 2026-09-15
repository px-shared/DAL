import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Plan from './Plan';
import { named } from './named';

export default interface Subscription {
  providerId: string;
  providerItemId: string;
  subscriptionCycleBegin: Date;
  subscriptionCycleEnd: Date;
  status: string;
  promotionCode: string;
  invoice: any;
  checkout: string;
  last4: string;

  plan: Plan;
  organisation: Organisation;

  contactedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class Subscription {
  constructor(
    providerId: string,
    providerItemId: string,
    subscriptionCycleBegin: number,
    subscriptionCycleEnd: number | null,
    status: string
  ) {
    this.providerId = providerId;
    this.providerItemId = providerItemId;
    this.subscriptionCycleBegin = new Date(subscriptionCycleBegin * 1000);
    this.subscriptionCycleEnd = subscriptionCycleEnd
      ? new Date(subscriptionCycleEnd * 1000)
      : null;
    this.status = status;
  }
}

// The schema names this class's relations by string, and TypeORM matches
// those strings against the class NAME. Pin it so a minifier cannot
// rename it out from under them. See models/named.ts.
named(Subscription, 'Subscription');

export const SubscriptionSchema = new EntitySchema<Subscription>({
  name: 'Subscription',
  target: Subscription,
  columns: {
    providerId: {
      type: 'varchar',
      length: 256,
      primary: true
    },
    providerItemId: {
      type: 'varchar',
      length: 256,
      unique: true
    },
    subscriptionCycleBegin: {
      type: 'timestamp',
      nullable: false
    },
    subscriptionCycleEnd: {
      type: 'timestamp',
      nullable: true
    },
    promotionCode: {
      type: 'varchar',
      nullable: true
    },
    checkout: {
      type: 'varchar',
      nullable: true
    },
    status: {
      type: 'varchar',
      length: 64,
      nullable: false
    },
    last4: {
      type: 'varchar',
      length: 64,
      nullable: true
    },
    contactedAt: {
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
      inverseSide: 'subscription',
      joinColumn: true,
      onDelete: 'CASCADE'
    },
    plan: {
      type: 'many-to-one',
      target: 'Plan',
      inverseSide: 'subscription',
      eager: true,
      cascade: true
    }
  }
});

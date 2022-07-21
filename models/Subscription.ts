import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Plan from './Plan';

export default interface Subscription {
  providerId: string;
  providerItemId: string;
  subscriptionCycleBegin: Date;
  subscriptionCycleEnd: Date;
  status: string;
  promotionCode: string;
  invoice: any;

  plan: Plan;
  organisation: Organisation;

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
      length: 128,
      nullable: true
    },
    status: {
      type: 'varchar',
      length: 64,
      nullable: false
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

import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import User from './User';
import AffiliateClick from './AffiliateClick';

export default interface AffiliateConversion {
  id: number;

  cid: string;
  externalCid: string;
  couponCodes: string[];
  revenueOriginId: string;
  conversionTypeCode: string;
  status: string;
  amount: string;
  currency: string;
  externalId: string;
  customerId: string;
  customParams: {
    advS1: string;
    advS2: string;
    advS3: string;
    advS4: string;
    advS5: string;
  };

  affiliateClick: AffiliateClick;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class AffiliateConversion {
  // @ts-ignore
  public static name = 'AffiliateConversion';
}

export const AffiliateConversionSchema = new EntitySchema<AffiliateConversion>({
  name: 'AffiliateConversion',
  target: AffiliateConversion,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    cid: {
      type: 'varchar',
      nullable: true
    },
    externalCid: {
      type: 'varchar',
      nullable: true
    },
    couponCodes: {
      type: 'simple-json',
      nullable: true
    },
    revenueOriginId: {
      type: 'varchar',
      nullable: true
    },
    conversionTypeCode: {
      type: 'varchar',
      nullable: true
    },
    status: {
      type: 'varchar',
      nullable: true
    },
    amount: {
      type: 'varchar',
      nullable: true
    },
    currency: {
      type: 'varchar',
      nullable: true
    },
    externalId: {
      type: 'varchar',
      nullable: true
    },
    customerId: {
      type: 'varchar',
      nullable: true
    },
    customParams: {
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
    affiliateClick: {
      type: 'one-to-one',
      target: 'AffiliateClick',
      inverseSide: 'affiliateConversion',
      joinColumn: true,
      onDelete: 'SET NULL'
    }
  }
});

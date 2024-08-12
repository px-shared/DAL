import { EntitySchema } from 'typeorm';
import Organisation from './Organisation';
import Workspace from './Workspace';
import User from './User';
import AffiliateConversion from './AffiliateConversion';

export default interface AffiliateClick {
  id: number;

  cid: string;
  linkId: string;
  sourceId: string;
  ipAddress: string;
  userAgent: string;
  countryCode: string;
  subdivisionCode: string;
  city: string;
  cityLatLong: {
    latitude: 0;
    longitude: 0;
  };
  requestUrl: string;
  referer: string;
  affS1: string;
  affS2: string;
  affS3: string;
  affS4: string;
  affS5: string;

  affiliateConversion: AffiliateConversion;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default class AffiliateClick {
  // @ts-ignore
  public static name = 'AffiliateClick';
}

export const AffiliateClickSchema = new EntitySchema<AffiliateClick>({
  name: 'AffiliateClick',
  target: AffiliateClick,
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
    linkId: {
      type: 'varchar',
      nullable: true
    },
    sourceId: {
      type: 'varchar',
      nullable: true
    },
    ipAddress: {
      type: 'varchar',
      nullable: true
    },
    userAgent: {
      type: 'varchar',
      nullable: true
    },
    countryCode: {
      type: 'varchar',
      nullable: true
    },
    subdivisionCode: {
      type: 'varchar',
      nullable: true
    },
    city: {
      type: 'varchar',
      nullable: true
    },
    cityLatLong: {
      type: 'simple-json',
      nullable: true
    },
    requestUrl: {
      type: 'varchar',
      nullable: true
    },
    referer: {
      type: 'varchar',
      nullable: true
    },
    affS1: {
      type: 'varchar',
      nullable: true
    },
    affS2: {
      type: 'varchar',
      nullable: true
    },
    affS3: {
      type: 'varchar',
      nullable: true
    },
    affS4: {
      type: 'varchar',
      nullable: true
    },
    affS5: {
      type: 'varchar',
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
    affiliateConversion: {
      type: 'one-to-one',
      target: 'AffiliateConversion',
      cascade: true,
      inverseSide: 'affiliateClick'
    }
  }
});

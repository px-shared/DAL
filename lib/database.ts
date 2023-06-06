import { EntitySchema, getConnectionManager } from 'typeorm';
import { OrganisationSchema } from '../models/Organisation';
import { DomainSchema } from '../models/Domain';
import { SessionSchema } from '../models/Session';
import { ShortSchema } from '../models/Short';
import { TagSchema } from '../models/Tag';
import { PixelSchema } from '../models/Pixel';
import { FeedbackSchema } from '../models/Feedback';
import { SettingsSchema } from '../models/Settings';
import { PreferencesSchema } from '../models/Preferences';
import { UserSchema } from '../models/User';
import { VerificationSchema } from '../models/Verification';
import { UsageSchema } from '../models/Usage';
import { SubscriptionSchema } from '../models/Subscription';
import { PlanSchema } from '../models/Plan';
import { DefaultsSchema } from '../models/Defaults';
import { AccessTokenSchema } from '../models/AccessToken';
import { QRSchema } from '../models/QR';
import { SiteSchema } from '../models/Site';
import { EventSchema } from '../models/Event';
import { IntegrationSchema } from '../models/Integration';
import { AssetSchema } from '../models/Asset';
import { SegmentSchema } from '../models/Segment';
import { AuditSchema } from '../models/Audit';
import { ShortSubscriber } from '../subscribers/Short';
import { TagSubscriber } from '../subscribers/Tag';
import { PixelSubscriber } from '../subscribers/Pixel';
import { DomainSubscriber } from '../subscribers/Domain';
import { AccessTokenSubscriber } from '../subscribers/AccessToken';
import { QRSubscriber } from '../subscribers/QR';
import { SegmentSubscriber } from '../subscribers/Segment';

const connectionOptions = {
  default: {
    type: process.env.TYPEORM_CONNECTION,
    database: process.env.TYPEORM_DATABASE,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
    logging: process.env.TYPEORM_LOGGING == 'true',
    cache: {
      duration: 15000
    },
    entities: [
      AuditSchema,
      OrganisationSchema,
      DomainSchema,
      SessionSchema,
      ShortSchema,
      TagSchema,
      PixelSchema,
      FeedbackSchema,
      SettingsSchema,
      PreferencesSchema,
      UserSchema,
      VerificationSchema,
      UsageSchema,
      SubscriptionSchema,
      PlanSchema,
      DefaultsSchema,
      AccessTokenSchema,
      QRSchema,
      SiteSchema,
      EventSchema,
      IntegrationSchema,
      AssetSchema,
      SegmentSchema
    ],
    subscribers: [
      ShortSubscriber,
      TagSubscriber,
      PixelSubscriber,
      DomainSubscriber,
      AccessTokenSubscriber,
      QRSubscriber,
      SegmentSubscriber
    ]
  }
};

const transform = (entity: EntitySchema, databaseType: string) => {
  const conditions = {
    type: {
      postgres: {
        timestamp: 'timestamptz'
      },
      sqlite: {
        timestamp: 'datetime'
      }
    }
  };

  for (const index in entity.options.columns) {
    const match = conditions.type[databaseType];

    if (match) {
      for (const condition in match) {
        if (condition === entity.options.columns[index].type) {
          entity.options.columns[index].type = match[condition];
        }
      }
    }
  }

  return entity;
};

connectionOptions.default.entities = connectionOptions.default.entities.map(
  (entity: EntitySchema<any>) =>
    transform(entity, connectionOptions.default.type)
);

export const ensureConnection = async (name = 'default') => {
  const connectionManager = getConnectionManager();

  if (connectionManager.has(name)) {
    const connection = connectionManager.get(name);

    if (!connection.isConnected) {
      await connection.connect();
    }

    return connection;
  }

  return await connectionManager
    .create({ name, ...connectionOptions[name] })
    .connect();
};

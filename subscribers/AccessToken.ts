import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import AccessToken, { AccessTokenSchema } from '../models/AccessToken';
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class AccessTokenSubscriber
  implements EntitySubscriberInterface<AccessToken>
{
  listenTo() {
    return AccessToken;
  }

  async beforeInsert(event: InsertEvent<AccessToken>) {
    return createAudit(
      event.connection,
      pickEntitySchema<AccessToken>(AccessTokenSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<AccessToken>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(AccessTokenSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<AccessToken>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<AccessToken>(AccessTokenSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.organisation,
    //   'REMOVE'
    // );
  }
}

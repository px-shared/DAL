import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import Short, { ShortSchema } from '../models/Short';
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class ShortSubscriber implements EntitySubscriberInterface<Short> {
  listenTo() {
    return Short;
  }

  async beforeInsert(event: InsertEvent<Short>) {
    return createAudit(
      event.connection,
      pickEntitySchema<Short>(ShortSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.workspace,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Short>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(ShortSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.workspace,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Short>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<Short>(ShortSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.workspace,
    //   'REMOVE'
    // );
  }
}

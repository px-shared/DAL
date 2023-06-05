import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import Short, { ShortSchema as Schema } from '../models/Short';

@EventSubscriber()
export class ShortSubscriber implements EntitySubscriberInterface<Short> {
  listenTo() {
    return Short;
  }

  async beforeInsert(event: InsertEvent<Short>) {
    await createAudit(
      event.connection,
      event.entity,
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Short>) {
    await createAudit(
      event.connection,
      event.entity,
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Short>) {
    await createAudit(
      event.connection,
      event.entity,
      event.metadata.name,
      event.entity?.id,
      event.queryRunner?.data?.user,
      event.queryRunner?.data?.organisation,
      'REMOVE'
    );
  }
}

import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import Tag, { TagSchema } from '../models/Tag';
import { pickEntity } from '../lib/util';

@EventSubscriber()
export class TagSubscriber implements EntitySubscriberInterface<Tag> {
  listenTo() {
    return Tag;
  }

  async beforeInsert(event: InsertEvent<Tag>) {
    await createAudit(
      event.connection,
      pickEntity<Tag>(TagSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Tag>) {
    await createAudit(
      event.connection,
      pickEntity<ObjectLiteral>(TagSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Tag>) {
    await createAudit(
      event.connection,
      pickEntity<Tag>(TagSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.queryRunner?.data?.user,
      event.queryRunner?.data?.organisation,
      'REMOVE'
    );
  }
}

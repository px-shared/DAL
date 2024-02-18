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
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class TagSubscriber implements EntitySubscriberInterface<Tag> {
  listenTo() {
    return Tag;
  }

  async beforeInsert(event: InsertEvent<Tag>) {
    return createAudit(
      event.connection,
      pickEntitySchema<Tag>(TagSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.workspace,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Tag>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(TagSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.workspace,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Tag>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<Tag>(TagSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.workspace,
    //   'REMOVE'
    // );
  }
}

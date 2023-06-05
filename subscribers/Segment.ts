import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import Segment, { SegmentSchema } from '../models/Segment';
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class SegmentSubscriber implements EntitySubscriberInterface<Segment> {
  listenTo() {
    return Segment;
  }

  async beforeInsert(event: InsertEvent<Segment>) {
    return createAudit(
      event.connection,
      pickEntitySchema<Segment>(SegmentSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Segment>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(SegmentSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Segment>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<Segment>(SegmentSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.organisation,
    //   'REMOVE'
    // );
  }
}

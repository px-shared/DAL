import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import Pixel, { PixelSchema } from '../models/Pixel';
import { pickEntity } from '../lib/util';

@EventSubscriber()
export class PixelSubscriber implements EntitySubscriberInterface<Pixel> {
  listenTo() {
    return Pixel;
  }

  async beforeInsert(event: InsertEvent<Pixel>) {
    await createAudit(
      event.connection,
      pickEntity<Pixel>(PixelSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Pixel>) {
    await createAudit(
      event.connection,
      pickEntity<ObjectLiteral>(PixelSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Pixel>) {
    await createAudit(
      event.connection,
      pickEntity<Pixel>(PixelSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.queryRunner?.data?.user,
      event.queryRunner?.data?.organisation,
      'REMOVE'
    );
  }
}

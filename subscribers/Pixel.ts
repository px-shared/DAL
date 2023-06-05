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
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class PixelSubscriber implements EntitySubscriberInterface<Pixel> {
  listenTo() {
    return Pixel;
  }

  async beforeInsert(event: InsertEvent<Pixel>) {
    return createAudit(
      event.connection,
      pickEntitySchema<Pixel>(PixelSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Pixel>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(PixelSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Pixel>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<Pixel>(PixelSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.organisation,
    //   'REMOVE'
    // );
  }
}

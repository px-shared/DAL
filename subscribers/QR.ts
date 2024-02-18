import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import QR, { QRSchema } from '../models/QR';
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class QRSubscriber implements EntitySubscriberInterface<QR> {
  listenTo() {
    return QR;
  }

  async beforeInsert(event: InsertEvent<QR>) {
    return createAudit(
      event.connection,
      pickEntitySchema<QR>(QRSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.workspace,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<QR>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(QRSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.workspace,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<QR>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<QR>(QRSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.workspace,
    //   'REMOVE'
    // );
  }
}

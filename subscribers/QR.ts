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
import { pickEntity } from '../lib/util';

@EventSubscriber()
export class QRSubscriber implements EntitySubscriberInterface<QR> {
  listenTo() {
    return QR;
  }

  async beforeInsert(event: InsertEvent<QR>) {
    await createAudit(
      event.connection,
      pickEntity<QR>(QRSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<QR>) {
    await createAudit(
      event.connection,
      pickEntity<ObjectLiteral>(QRSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<QR>) {
    await createAudit(
      event.connection,
      pickEntity<QR>(QRSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.queryRunner?.data?.user,
      event.queryRunner?.data?.organisation,
      'REMOVE'
    );
  }
}

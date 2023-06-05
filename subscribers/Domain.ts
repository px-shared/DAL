import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent
} from 'typeorm';
import { createAudit } from '../lib/audit';
import Domain, { DomainSchema } from '../models/Domain';
import { pickEntity } from '../lib/util';

@EventSubscriber()
export class DomainSubscriber implements EntitySubscriberInterface<Domain> {
  listenTo() {
    return Domain;
  }

  async beforeInsert(event: InsertEvent<Domain>) {
    await createAudit(
      event.connection,
      pickEntity<Domain>(DomainSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Domain>) {
    await createAudit(
      event.connection,
      pickEntity<ObjectLiteral>(DomainSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Domain>) {
    await createAudit(
      event.connection,
      pickEntity<Domain>(DomainSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.queryRunner?.data?.user,
      event.queryRunner?.data?.organisation,
      'REMOVE'
    );
  }
}

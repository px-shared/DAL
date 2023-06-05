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
import { pickEntitySchema } from '../lib/util';

@EventSubscriber()
export class DomainSubscriber implements EntitySubscriberInterface<Domain> {
  listenTo() {
    return Domain;
  }

  async beforeInsert(event: InsertEvent<Domain>) {
    return createAudit(
      event.connection,
      pickEntitySchema<Domain>(DomainSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'INSERT'
    );
  }

  async beforeUpdate(event: UpdateEvent<Domain>) {
    return createAudit(
      event.connection,
      pickEntitySchema<ObjectLiteral>(DomainSchema, event.entity),
      event.metadata.name,
      event.entity?.id,
      event.entity?.user,
      event.entity?.organisation,
      'UPDATE'
    );
  }

  async beforeRemove(event: RemoveEvent<Domain>) {
    // return createAudit(
    //   event.connection,
    //   pickEntitySchema<Domain>(DomainSchema, event.entity),
    //   event.metadata.name,
    //   event.entity?.id,
    //   event.queryRunner?.data?.user,
    //   event.queryRunner?.data?.organisation,
    //   'REMOVE'
    // );
  }
}

import { Connection } from 'typeorm';
import Audit, { AuditSchema } from '../models/Audit';
import Organisation from '../models/Organisation';
import User from '../models/User';

export const createAudit = async (
  connection: Connection,
  payload: object,
  entity: string,
  entityId: number | string,
  user: User,
  organisation: Organisation,
  action: 'INSERT' | 'UPDATE' | 'REMOVE'
) => {
  try {
    if (!connection) return;
    if (!organisation) return;

    return connection.manager.insert(
      AuditSchema,
      new Audit(action, entity, entityId, payload, user, organisation)
    );
  } catch (error) {
    console.error(error);
    console.error(
      `Failed to log audit for entity action:${action} type:${entity} id:${entityId} organisation:${organisation?.id}`
    );
  }
};

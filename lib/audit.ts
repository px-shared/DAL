import { Connection } from 'typeorm';
import Audit, { AuditSchema } from '../models/Audit';
import Organisation from '../models/Organisation';
import User from '../models/User';
import Workspace from '../models/Workspace';

export const createAudit = async (
  connection: Connection,
  payload: object,
  entity: string,
  entityId: number | string,
  user: User,
  workspace: Workspace,
  action: 'INSERT' | 'UPDATE' | 'REMOVE'
) => {
  try {
    if (!connection) return;
    if (!workspace) return;

    return connection.manager.insert(
      AuditSchema,
      new Audit(action, entity, entityId, payload, user, workspace)
    );
  } catch (error) {
    console.error(error);
    console.error(
      `Failed to log audit for entity action:${action} type:${entity} id:${entityId} workspace:${workspace?.id}`
    );
  }
};

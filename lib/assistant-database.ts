import { getConnectionManager } from 'typeorm';
import { databaseSsl } from './ssl';
import { AssistantSchema } from '../models/Assistant';
import { AssistantDocumentSchema } from '../models/AssistantDocument';
import { AssistantChunkSchema } from '../models/AssistantChunk';
import { AssistantConversationSchema } from '../models/AssistantConversation';

const connectionOptions = {
  assistant: {
    type: process.env.ASSISTANT_DB_CONNECTION || 'postgres',
    database: process.env.ASSISTANT_DB_DATABASE,
    host: process.env.ASSISTANT_DB_HOST,
    port: process.env.ASSISTANT_DB_PORT,
    username: process.env.ASSISTANT_DB_USERNAME,
    password: process.env.ASSISTANT_DB_PASSWORD,
    synchronize: false,
    logging: process.env.TYPEORM_LOGGING == 'true',
    ssl: databaseSsl(),
    extra: {
      poolSize: 10,
      connectionTimeoutMillis: 5000,
      query_timeout: 30000,
      statement_timeout: 30000
    },
    entities: [
      AssistantSchema,
      AssistantDocumentSchema,
      AssistantChunkSchema,
      AssistantConversationSchema
    ]
  }
};

export const ensureAssistantConnection = async (name = 'assistant') => {
  const connectionManager = getConnectionManager();

  if (connectionManager.has(name)) {
    const connection = connectionManager.get(name);

    if (!connection.isConnected) {
      await connection.connect();
    }

    return connection;
  }

  return await connectionManager
    .create({ name, ...connectionOptions[name] })
    .connect();
};

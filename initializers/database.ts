import 'reflect-metadata';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import console = require('console');

export const initializeDatabase = async (optionOverrides: Record<string, any> = {}): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();
  const options: any = {
    ...connectionOptions,
    ...optionOverrides
  };

  const connection = await createConnection(options);

  return connection;
};

export default initializeDatabase;

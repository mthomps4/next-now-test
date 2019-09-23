import 'reflect-metadata';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import { User } from '../entities/User';

export const initializeDatabase = async (optionOverrides: Record<string, any> = {}): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();
  const options: any = {
    ...connectionOptions,
    entities: [User],
    migrations: [__dirname + '/migrations/*.ts'],
    ...optionOverrides
  };

  const connection = await createConnection(options);

  return connection;
};

export default initializeDatabase;

import 'reflect-metadata';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export const initializeDatabase = async (optionOverrides: Record<string, any> = {}): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();

  const options: any = {
    ...connectionOptions,
    type: 'postgres',
    /** If logging is enabled */
    logging: true,
    /** If the DB should auto-migrate */
    synchronize: false,
    /** Folder for migrations */
    migrations: ['migrations/**/*.ts'],
    entities: ['entities/**/*.ts']
  };

  const connection = await createConnection(options);

  return connection;
};

export default initializeDatabase;

import { getConnection } from 'typeorm';
import { initializeDatabase } from './../initializers/database';

/** Resets a database to a blank state */
export const resetDB = async (): Promise<void> => {
  const connection = await getConnection();

  // we probably want this to be a truncate
  await connection.dropDatabase();
  await connection.synchronize();
};

/** Set up a connection to the database and reset it to a blank state */
export const connectDB = async (): Promise<void> => {
  await initializeDatabase({
    synchronize: false,
    migrationsRun: false,
    logging: false
  });

  await resetDB();
};

export const closeDB = async (): Promise<void> => {
  const connection = await getConnection();
  await connection.close();
};

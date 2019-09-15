import initializeDatabase from '../../initializers/database';
import { seed as userSeeds } from '../userSeeds';

const seed = async (): Promise<any> => {
  await userSeeds();
};

const run = async (): Promise<any> => {
  console.log('Connecting to DB');
  const connection = await initializeDatabase({ migrationsRun: false });

  console.log('Seeding DB');
  await seed();

  console.log('Closing DB');
  return await connection.close();
};

run();

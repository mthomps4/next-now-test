import { NowRequest, NowResponse } from '@now/node';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { initializeDatabase } from '../../initializers/database';

export default async (_req: NowRequest, res: NowResponse) => {
  const connection = await initializeDatabase();
  const userRepo = await getRepository(User);

  // const {
  //   query: { name }
  // } = req;

  // const {
  //   body: { name }
  // } = req;

  const users = await userRepo.find();
  await connection.close();
  return res.json({ users });
};

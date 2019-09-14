import Chance from 'chance';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
const chance = new Chance();

export const UserFactory = {
  build: (attrs: Partial<User> = {}) => {
    const userAttrs: Partial<User> = {
      email: chance.email(),
      ...attrs
    };

    return getRepository(User).create(userAttrs);
  },

  create: async (attrs: Partial<User> = {}) => {
    const user = UserFactory.build(attrs);
    const createdUser = await getRepository(User).save(user);

    return createdUser;
  },

  deleteAll: async () => await getRepository(User).query('TRUNCATE "user" CASCADE')
};

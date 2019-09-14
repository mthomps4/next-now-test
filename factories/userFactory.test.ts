import { closeDB, connectDB, resetDB } from '../test/helpers';
import { UserFactory } from './User';

describe('Can Use Factory', () => {
  beforeAll(async done => {
    await connectDB();
    done();
  });

  beforeEach(async done => {
    await resetDB();
    done();
  });

  afterAll(async done => {
    await closeDB();
    done();
  });

  it('Can insert user with Factory', async () => {
    const user = await UserFactory.create({ email: 'test@email.com' });

    expect(user.id).toBeTruthy();
    expect(user.email).toEqual('test@email.com');
  });
});

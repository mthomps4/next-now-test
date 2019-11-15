import axios, { AxiosError, AxiosResponse } from 'axios';
import { User } from '../entities/User';
import { UserFactory } from '../factories/User';
import { closeDB, connectDB, resetDB } from './helpers';

describe('Get User Tests', () => {
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

  const handleUserResponse = (response: AxiosResponse<User>): [User, null] => {
    console.log(response.data.id);
    console.log(response.data.firstName);
    console.log(response.status);
    return [response.data, null];
  };

  const handleError = (error: AxiosError): [null, AxiosError] => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log(error.message);
    }
    return [null, error];
  };

  it('Can Get User', async () => {
    const user = await UserFactory.create({ email: 'test@email.com' });

    const [queriedUser, errors] = await axios
      .get('/api/users/get')
      .then(handleUserResponse)
      .catch(handleError);

    console.log(errors, queriedUser);

    // const res = await request(nextApi).get('/api/users/get');

    // console.log(res);

    expect(queriedUser.firstName).toEqual(user.firstName);
    expect(errors).toBeNull();
  });
});

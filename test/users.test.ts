import axios, { AxiosError, AxiosResponse } from 'axios';
import http from 'http';
import { apiResolver } from 'next-server/dist/server/api-utils';
import listen from 'test-listen';
import { User } from '../entities/User';
import { UserFactory } from '../factories/User';
import queryUsers from '../pages/api/users';
// import queryUsers from '../pages/api/users';
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

  // const handleResponse = (response: AxiosResponse) => {
  //   console.log(response.data);
  //   console.log(response.status);
  //   console.log(response.statusText);
  //   console.log(response.headers);
  //   console.log(response.config);
  // };

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
    let requestHandler = (req, res) => apiResolver(req, res, undefined, queryUsers);
    let server = http.createServer(requestHandler);
    let url = await listen(server);
    console.log(url);
    const [queriedUser, errors] = await axios
      .get('/api/users')
      .then(handleUserResponse)
      .catch(handleError);

    console.log(errors, queriedUser);

    // let response = await fetch(url);
    // let json = await response.json();
    // expect(response.status).toBe(200);
    // expect(json).toEqual({ users: [user] });
    expect(queryUsers).toEqual([user]);
  });
});

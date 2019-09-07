const path = require('path');
jest.setTimeout(30000);
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') });

// beforeAll(() => {
//   test('Returns Correct Test Credentials', () => {
//     const testDbPath = process.env.TYPEORM_DATABASE || 'NO ENV';
//     const appEnv = process.env.APP_ENV || 'NO APP ENV FOUND';

//     expect(appEnv).toEqual('d');
//     expect(testDbPath).toEqual('next_now_test_test');
//   });
// });

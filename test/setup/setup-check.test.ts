import { hello } from './hello-world';

test('Can import and run', () => {
  expect(hello).toEqual('Hello World');
});

test('Returns Correct Test Credentials', () => {
  console.log(process.env.APP_ENV);
  const testDbPath = process.env.TYPEORM_DATABASE || 'NO ENV';
  const appEnv = process.env.APP_ENV || 'NO APP ENV FOUND';

  expect(appEnv).toEqual('LOCAL_TEST');
  expect(testDbPath).toEqual('next_now_test_test');
});

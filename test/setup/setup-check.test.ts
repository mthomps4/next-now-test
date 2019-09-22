import { hello } from './hello-world';

test('Can import and run', () => {
  expect(hello).toEqual('Hello World');
});

test('Returns Correct Test Credentials', () => {
  const testDbName = process.env.TYPEORM_DATABASE || 'NO ENV';
  const appEnv = process.env.APP_ENV || 'NO APP ENV FOUND';

  if (appEnv === 'TESTING SERVER' || appEnv === 'LOCAL TESTING') {
    expect(testDbName).toEqual('next_now_test');
  } else {
    throw new Error('TEST ENV FILE NOT SORUCED');
  }
});

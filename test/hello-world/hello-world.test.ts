import { hello } from './hello-world';

test('Returns Hello World', () => {
  expect(hello).toEqual('Hello World');
});

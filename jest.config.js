module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules']
};

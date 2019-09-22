module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules']
};

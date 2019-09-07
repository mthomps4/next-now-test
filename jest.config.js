module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/config',
    '<rootDir>/migrations',
    '<rootDir>/entities',
    '<rootDir>/initializers',
    '<rootDir>/repositories'
  ]
};

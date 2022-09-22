module.exports = {
  globals: {
    'ts-jest': {
      'tsconfig': 'tsconfig.spec.json',
      'stringifyContentPathRegex': '\\.html$',
    }
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup.jest.ts'],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  resolver: '<rootDir>/src/jest.resolver.js'
};

const esModules = ['@firebase', 'firebase', '@ngrx'].join('|');

module.exports = {
  globals: {
    'ts-jest': {
      'tsconfig': 'tsconfig.spec.json',
      'stringifyContentPathRegex': '\\.html$',
    }
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup.jest.ts'],
  moduleNameMapper: {
    'firebase/compat': '<rootDir>/node_modules/firebase/compat/dist/index.node.cjs',
    'firebase/app': '<rootDir>/node_modules/firebase/firebase-app.js',
    '@firebase/util': '<rootDir>/node_modules/@firebase/util/dist/index.node.cjs.js'
  },
  transformIgnorePatterns: [
    `/node_modules/(?!(${esModules}|.*.mjs$))`,
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  resolver: '<rootDir>/src/jest.resolver.js'
};

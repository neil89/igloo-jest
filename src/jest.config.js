const esModules = ['@angular', 'firestore', '@firebase', 'firebase', '@ngrx'].join('|');

module.exports = {
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
    },
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

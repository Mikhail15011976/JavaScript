module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
  };
  
import path from 'path'

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  rootDir: '../../',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  coverageProvider: 'babel',
  modulePaths: ['<rootDir>src'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
  }
}

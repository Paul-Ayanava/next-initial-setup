module.exports = {
    verbose: true,
    transform: {
        '\\.[jt]sx?$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        'token.module.js': '<rootDir>/__mocks__/tokenMock.js'
    },
    modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
    testResultsProcessor: 'jest-sonar-reporter',
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/pages',
        '<rootDir>/src/queries'
    ],
    coverageReporters: ['clover', 'json', 'json-summary', 'lcov', 'text'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: [
        '<rootDir>/.next',
        '<rootDir>/.husky',
        '<rootDir>/node_modules',
        '<rootDir>/build',
        '<rootDir>/out',
        '<rootDir>/coverage'
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
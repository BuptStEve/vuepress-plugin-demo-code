module.exports = {
    verbose: false,
    testURL: 'http://localhost/',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**',
        '!src/client/icons/**',
        '!src/client/highlight.js',
        '!src/client/enhanceAppFile.js',
    ],
    coveragePathIgnorePatterns: ['/__snapshots__/'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.jsx?$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'vue'],
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
}

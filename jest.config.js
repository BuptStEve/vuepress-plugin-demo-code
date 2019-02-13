module.exports = {
    verbose: false,
    testURL: 'http://localhost/',
    collectCoverage: true,
    collectCoverageFrom: [ 'src/**' ],
    coveragePathIgnorePatterns: [ '/__snapshots__/' ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.jsx?$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    moduleFileExtensions: ['js', 'vue'],
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
}

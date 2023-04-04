import tsconfig from './tsconfig.json';
// Karma configuration
// Generated on Fri Mar 31 2023 16:28:49 GMT+0300 (за східноєвропейським літнім часом)

module.exports = (config: any) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        plugins: [
            require('karma-jasmine'),
            require('karma-typescript'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter')
        ],
        client: {
            jasmine: {
                random: false
            }
        },
        karmaTypescriptConfig: {
            compilerOptions: tsconfig.compilerOptions,
        },
        files: [
            // {pattern: 'src/**/*.ts', type: 'js'}
            "./src/**/*.ts" // *.tsx for React Jsx
        ],
        exclude: [
            "./src/utils/files.*"
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}

var config = module.exports;

config.browser = {
    environment: 'browser',
    rootPath: '../',

    libs: [
        'node_modules/requirejs/require.js',
        'test/require-config.js'
    ],

    sources: [
        'src/**/*.js',
    ],

    tests: [
        'test/**/*-test.js'
    ],

    extensions: [
        require('buster-amd')
    ]
};

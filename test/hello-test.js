define(function (require) {
    var hello = require('src/hello');
    var assert = buster.assert;

    buster.spec.expose();

    describe('hello module', function () {
        it('should export a function', function () {
            assert.isFunction(hello);
        });
    });
});

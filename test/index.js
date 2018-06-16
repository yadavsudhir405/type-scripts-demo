(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../dist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var mocha_1 = require("mocha");
    var assert = require("assert");
    var dist_1 = require("../dist");
    mocha_1.describe("index", function () {
        it('should say hello world', function () {
            dist_1.SmokeTest.helloWorld();
            assert.ok(true);
        });
    });
});
//# sourceMappingURL=index.js.map
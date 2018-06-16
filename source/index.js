(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmokeTest;
    (function (SmokeTest) {
        function helloWorld() {
            console.log("Hello World");
        }
        SmokeTest.helloWorld = helloWorld;
    })(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
});
//# sourceMappingURL=index.js.map
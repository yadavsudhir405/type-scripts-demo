import {describe} from "mocha";
import * as assert from "assert";
import {SmokeTest} from "../dist";
describe("index", ()=>{
    it('should say hello world', function () {
        SmokeTest.helloWorld();
        assert.ok(true);
    });
})
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var callExpress_1 = require("../callExpress");
// configure supertest with the app
var request = (0, supertest_1.default)(index_1.default);
describe("test index express endpoint", function () {
    // set time out before all 
    beforeAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
    });
    it("test end point status code response", function (done) {
        // test status code
        request.get("/api").then(function (response) {
            expect(response.status).toBe(200);
        });
        done();
    });
    it("test api end point data", function () {
        var data_promise = (0, callExpress_1.get_api)();
        data_promise.then(function (data) {
            expect(data).toEqual("hello");
        });
    });
    // end of describe
});

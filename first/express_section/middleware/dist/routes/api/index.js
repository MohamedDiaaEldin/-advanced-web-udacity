"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var logger_1 = __importDefault(require("../../utilities/logger"));
var students_1 = __importDefault(require("./students"));
var teachers_1 = __importDefault(require("./teachers"));
var api_routers = express.Router();
//// for all routes with in logger
// api_routers.use(logger)
api_routers.get('/', function (request, response) {
    response.send("main api route");
});
// apply loger for only this end point 
api_routers.use('/students', logger_1.default, students_1.default);
api_routers.use('/teachers', teachers_1.default);
exports.default = api_routers;

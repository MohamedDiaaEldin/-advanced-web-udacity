"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exprees = require('express');
// import logger from "../../utilities/logger"
var teachers = exprees.Router();
teachers.get('/', function (request, response) {
    response.send("teachers routes");
});
exports.default = teachers;

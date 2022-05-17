"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
// import logger from '../../utilities/logger'
var students = express.Router();
students.get('/', function (request, response) {
    response.send("students routes");
});
exports.default = students;

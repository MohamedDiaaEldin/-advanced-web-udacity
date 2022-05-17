"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log(req.originalUrl);
    next();
};
exports.default = logger;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 5000;
app.get('/api', function (req, res) {
    res.send('hello');
});
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/api/index"));
var app = (0, express_1.default)();
var port = 5000;
app.use('/api', index_1.default);
app.listen(port, "localhost", function () {
    console.log("server is running on http://localhost:".concat(port));
});
exports.default = app;

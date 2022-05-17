"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var csv = require("csvtojson");
var app = (0, express_1.default)();
var port = 3000;
var convert_csv = function () {
    var csv_file = 'data.csv';
    csv().fromFile(csv_file)
        .subscribe(function (row_ob_data) {
        if (!row_ob_data.phone) {
            row_ob_data.phone = "missing data";
        }
        return new Promise(function (resolve, reject) {
            resolve(row_ob_data);
        });
    }).then(function (all_data) {
        console.log('yes');
        fs_1.promises.open('data.json', 'a+').then(function (file) {
            file.write(JSON.stringify(all_data));
        });
    });
};
// Async / await usage
// const jsonArray=await csv().fromFile(csvFilePath);
convert_csv();
// app.get('/convert', (req, res)=>{
//     convert_csv()
//     res.send('converting...')
// })
// // start the Express server
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });

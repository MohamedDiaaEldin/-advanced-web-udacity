"use strict";
// export  const myFun = (number:number):number=>{
//     return number*5
//     // return number*6
// }
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("listing on port ".concat(port));
});

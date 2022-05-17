"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pormises javaScript
var promiseFun = function () {
    return new Promise(function (resolve, reject) {
        if (true) {
            setTimeout(function () {
                resolve('resolve data');
            }, 3000);
        }
        else {
            reject("error");
        }
    });
};
// promiseFun().then(data =>{
//     console.log(data)
//     return data
// }).then(another_data =>{
//     console.log(another_data + " extra")
// }).catch( error =>{
//     console.log(error)
// })
// using async await to recive deal with promises call back
// async function  asyncFun(){
//     try{
//         const result = await promiseFun();
//         console.log(result)
//     }
//     catch( error){
//         console.log(error)
//     }
// }
// asyncFun()
////////////// promises typeScript
var promiseTypeFun = function (data) {
    return new Promise(function (resolve, reject) {
        if (true) {
            setTimeout(function () {
                resolve(data + ' resolve data');
            }, 3000);
        }
        else {
            reject("error");
        }
    });
};
// console.log(typeof promiseTypeFun("data is here"))
promiseTypeFun("my data is here").then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

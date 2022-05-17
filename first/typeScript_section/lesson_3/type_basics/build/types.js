"use strict";
///// working with types 
//implicit typing 
var n = 10;
//explicit typing 
var nn = 10;
/////////////
// basic types
var squared = function (num) {
    return num * num;
};
squared(5);
squared('5');
// to declear unio types (Object types in java)
var fun = function (param) {
    console.log(param);
};
// const test = undefined
// console.log(typeof fun(10))
/////////////
/// other data types 
// void -> function will not return anything
///  never -> (function that always throw error $ function with infinit loop)
// any      -> can be any type () use noImplicitAny  in config file)
// unknown  ->  unknown type
/////////////
/*
//   important
//type assertions - casting
    1- const v = (param as unknown) as string;
    2- const v = <string> (<unknown> param);
*/
var v = "10";
var print_number = function (p) {
    console.log(p);
};
print_number(v);
print_number(v);
/////////////

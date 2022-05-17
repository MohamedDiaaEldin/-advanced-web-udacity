"use strict";
// arrays typeScript 
var arr = [5, 6, 8];
// console.log(arr)
//  arrays with diffrent types 
var arr2 = [5, 6, "3"];
// console.log(arr2)
//  tuples -> like python tuples 
// fixed size
var student = ["mohamed", 20, "october", true];
// console.log(student)
// console.log(student[0])
// console.log(student[1])
// console.log(student[2])
//Enums in javaScript
var copass = {
    points: ['North', 'South', 'East', "West"]
};
// Object.freeze(copass) /// make object immutable
// console.log(copass)
//Enums in typeScript
var Months;
(function (Months) {
    Months["North"] = "north";
    Months["South"] = "south";
    Months["DEC"] = "12";
})(Months || (Months = {}));
;
var Months2;
(function (Months2) {
    Months2[Months2["north"] = 0] = "north";
    Months2[Months2["south"] = 1] = "south";
    Months2[Months2["dec"] = 2] = "dec";
})(Months2 || (Months2 = {}));
;
console.log(Months.North);
console.log(Months.South);
console.log(Months.DEC);
// //
// console.log(Months2.north)
// console.log(Months2[0])
/// accept  Enum 
var print_months_enum = function (num, months) {
    console.log('number', num);
    console.log(months);
};
// print_months_enum(5, Months.North)

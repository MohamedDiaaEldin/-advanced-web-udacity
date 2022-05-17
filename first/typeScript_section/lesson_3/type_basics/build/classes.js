"use strict";
var Students = /** @class */ (function () {
    function Students(grade) {
        this.grade = grade;
    }
    return Students;
}());
var s = new Students(10);
console.log(s);
console.log(s.grade);
var studentFactory = function (name, age) {
    var greet = function () { return console.log('hello'); };
    return { name: name, age: age, greet: greet };
};
var myStudent = studentFactory('Hana', 16);
console.log(myStudent);

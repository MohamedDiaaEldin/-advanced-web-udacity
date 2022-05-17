"use strict";
///Object in javaScript 
var stu = {
    name: "mohamed",
    age: "ali",
    subjects: ["math", "english"]
};
var stu3 = { subjects: ["english", "math"], name: "mohamed", age: 20, pre_subjects: ["programming", "math1"], hours: 30 };
stu3.age = 3;
// console.log(stu3)
// it taks Student interface or any other interface have the same properties
var print_object = function (student) {
    console.log(student);
};
var for_stu = { subjects: ["english", "math"], name: "mohamed", age: 20, pre_subjects: ["programming", "math1"], hours: 30 };
var for_stu_two = { subjects: ["english", "math"], name: "mohamed", age: 20 };
var for_stu_two2 = { subjects: ["english", "math"], name: "mohamed" };
for_stu_two2.age = 30;
// for_stu_two2.name = "ali" /// complie error because readonly property
// print_object(stu3)
// print_object(for_stu)
// print_object(for_stu_two) // compile error

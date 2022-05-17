
///Object in javaScript 
const stu = {
    name:"mohamed",
    age:"ali",
    subjects:["math", "english"]    
}
// console.log(stu.name)


///Object in javaScript 
// but is not a greate optino 
const stu1 : {name:string, age:number, subjects:string[] } = {
    name:"mohamed",
    age:20,
    subjects:["math", "english"]    
}

// console.log(stu1.name)
// stu1.name = 'ali'
// console.log(stu1.name)

// other way in objects in typeScript using interface
////// Interface
interface PreviousStudies{
    age:number,
    pre_subjects:string[],
    hours:number
}
// extends only diffrances from another interface
interface Student extends PreviousStudies{
    name:string;
    age:number;
    subjects:string[];
}


// make interface like Student interface with diffrent naem 
interface ForiegnStudent extends PreviousStudies{
    name:string;
    age:number;
    subjects:string[];
}

interface ForiegnStudentTwo {
    readonly name:string; // read money after first time
    age?:number; /// optional property 
    subjects:string[];
    // getSalary: Function
}


const stu3: Student =  {subjects:["english", "math"], name : "mohamed" ,  age:20  , pre_subjects:["programming", "math1"], hours:30}
stu3.age = 3
// stu3.another = 3 // combile error 
// console.log(stu3)

// it taks Student interface or any other interface have the same properties
const print_object = (student:Student)=>{
    console.log(student)
}
const for_stu: ForiegnStudent =  {subjects:["english", "math"], name : "mohamed" ,  age:20  , pre_subjects:["programming", "math1"], hours:30}
const for_stu_two: ForiegnStudentTwo =  {subjects:["english", "math"], name : "mohamed" ,  age:20}
const for_stu_two2: ForiegnStudentTwo =  {subjects:["english", "math"], name : "mohamed" }

for_stu_two2.age = 30
// for_stu_two2.name = "ali" /// complie error because readonly property
// print_object(stu3)
// print_object(for_stu)
// print_object(for_stu_two) // compile error



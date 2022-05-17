import { type } from "os"

// make aliases for types 
type name = (string|number)
type name2 = (string|number)

// use aliases for types
const student_ex :name = "ali"

// use aliases for types
const my_fun = (student_ex:name2) =>{
    console.log(student_ex)
}

my_fun("any thing")
my_fun(5)
// my_fun(true) // compile error 


/// alises like interfaces but aliases can not be modified 
type Studnet = {
    name:string;
}
const s :Studnet = {name:"ali"} 

//// compine aliases 
type phD = Studnet & {grade:number}
const sp :phD ={name:"ali", grade:12.5} 



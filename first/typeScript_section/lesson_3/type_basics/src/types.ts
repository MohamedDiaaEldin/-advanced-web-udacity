///// working with types 
//implicit typing 
const n = 10

//explicit typing 
const nn:number = 10
/////////////

// basic types
const squared = (num:number) : number =>{
    return num * num    
}
squared(5)
squared(('5' as unknown) as number)

// to declear unio types (Object types in java)
const fun = (param:number |  undefined):void =>{ 
    console.log(param)
}
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

const v = "10"

const print_number = (p:number):void=>{
    console.log(p)    
}

print_number((v as unknown) as number)
print_number( <number> ( <unknown> v ))
/////////////


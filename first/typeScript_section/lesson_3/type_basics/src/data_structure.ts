// arrays typeScript 
const arr :number[] = [5, 6, 8]
// console.log(arr)


//  arrays with diffrent types 
const arr2 : (string|number) []  = [5, 6 , "3"]
// console.log(arr2)


//  tuples -> like python tuples 
// fixed size
const student:[string, number, string , boolean] = ["mohamed", 20, "october", true]
// console.log(student)
// console.log(student[0])
// console.log(student[1])
// console.log(student[2])

//Enums in javaScript
const copass = {
    points:['North',  'South', 'East', "West"]
}
// Object.freeze(copass) /// make object immutable
// console.log(copass)



//Enums in typeScript
enum Months  {North="north", South="south", DEC="12"} ;
enum Months2  {north, south, dec} ;

// console.log(Months.North)
// console.log(Months.South)
// console.log(Months.DEC)
// //
// console.log(Months2.north)
// console.log(Months2[0])

/// accept  Enum 
const print_months_enum = (num:number, months:Months)=>{
    console.log('number', num)
    console.log(months)
}
// print_months_enum(5, Months.North)


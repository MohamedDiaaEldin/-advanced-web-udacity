
export  const myFun = (number:number):number=>{
    return number*5
    // return number*6
}



/// async function 
function timeout() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}
export async function asyncFun(){
    await timeout()
    return "value"
}


// console.log("start")

// async ()=>{
//     const result = await asyncFun()
//     console.log(result)    
// }
// // get value using async await 
// // get value using then
// asyncFun().then(result =>{console.log(result)})

// console.log("should be end")
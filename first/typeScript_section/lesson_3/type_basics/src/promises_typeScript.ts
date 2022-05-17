import { resolve } from "path/posix"

// pormises javaScript
const promiseFun = ()=>{
    return  new Promise((resolve, reject) =>{
        if (true){
            setTimeout( ()=>{
                resolve('resolve data')
            }, 3000)
            
        }
        else{
            reject("error")
        }
       
    })
}


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
const promiseTypeFun = (data:string): Promise<string> =>{
    return  new Promise((resolve, reject) =>{
        if (true){
            setTimeout( ()=>{
                resolve(data + ' resolve data')
            }, 3000)
            
        }
        else{
            reject("error")
        }
       
    })
}

// console.log(typeof promiseTypeFun("data is here"))
promiseTypeFun("my data is here").then( (data:string)=>{    
    console.log(data)
}).catch( (error:string) =>{
    console.log(error)
})
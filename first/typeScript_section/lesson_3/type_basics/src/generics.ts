export{}

const getFirst = <T>(arr:T[])=>{
    return arr[0]
}


console.log( getFirst(["ahmed", "mohamed"]))
// to ensure the return type
const num =  getFirst <number>([10, 20]) 
console.log( num)


const myFunc = async ():Promise<void> => { 
    setTimeout(() =>{}, 300) ; 
    console.log("anyhting")
};

console.log( typeof myFunc())
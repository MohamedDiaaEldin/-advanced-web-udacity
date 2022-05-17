console.log('start')




setTimeout(()=>{
    console.log('main time out')
},3000)

for(let i=0 ; i<1 ; i++){
    setTimeout(()=>{
        console.log('sub time out')
    },200)
    console.log('hi')
}

console.log('end')

process.nextTick(()=>console.log('next'))

setImmediate( ()=>{
    console.log('Immediate')
})
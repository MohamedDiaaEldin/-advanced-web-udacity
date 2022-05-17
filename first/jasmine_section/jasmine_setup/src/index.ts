// export  const myFun = (number:number):number=>{
//     return number*5
//     // return number*6
// }


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listing on port ${port}`)
})
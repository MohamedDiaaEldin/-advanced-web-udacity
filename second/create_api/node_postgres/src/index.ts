import express, {  Request, Response} from 'express'
require('dotenv').config()

const app:express.Application = express()
const host = '0.0.0.0' 
const port  = 5000 

app.get('/', (req:Request, res:Response)=>{
    res.send('hi')
})

console.log(process.env.PORT)
app.listen(port, host ,  ()=>{
    console.log(`server runing on ${host}:${port}`)
})
export default app


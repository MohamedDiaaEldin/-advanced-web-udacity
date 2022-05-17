require('dotenv').config()
import express, {  Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import students_routes from './handlers/student_handler'

import orders_routes from './handlers/orders'
const app:express.Application = express()
const host = '0.0.0.0' 
const port  = 5000 

//// how to use cors 
// define cors option
const cors_options = {
    origin:' http://localhost:1234',
    optionsSuccessStatus:200
}


// configure cors with app
// app.use(cors(cors_options))
app.use(bodyParser.json())

/// routes 
orders_routes(app)


app.get('/login', (req:Request, res:Response)=>{
    console.log(req.body)
    res.json({name:"ali"})
})

// configure cors with app
app.use(cors(cors_options))

///  call from handler 
students_routes(app)

app.use(bodyParser.json())

app.get('/', (req:Request, res:Response)=>{
    res.send('hi')

})

// apply cors for this end point
app.get('/second', cors(cors_options),(req:Request, res:Response)=>{
    res.send('second')
})


app.listen(port, host ,  ()=>{
    console.log(`server runing on ${host}:${port}`)
})
export default app


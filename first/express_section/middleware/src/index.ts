import express from 'express'
import { appendFile } from 'fs'
import api_routes from './routes/api/index'
import logger from './utilities/logger'


const app = express()
const port = 5000


/// define end point 
/// use another router implementaion  
// define middleware 
app.use('/api', (res, req, next) => {
  logger(res, req, next)
}, api_routes)
// or 
// app.use('/api', api_routes)

function handelServerSerror(error, req, res, next){
  console.log('server error happend')
  res.send("server error from handelServerSerror" )
  // next()
}

//// first middle
app.use('/main', (req, res, next)=>{
  console.log('first middle')
  next()
})
// all routes
app.use('*', (req, res, next)=>{
  console.log('all')
  next()
})

//// second middle
app.use('/main', (req, res, next)=>{
  console.log('second middle')
  next()
})

app.get('/main', (req, res) => {
  // throw new Error('error hereeee')
  res.send("in  main")
})

// handler errors 
app.use('/main', handelServerSerror)
/// or 
// /// error handler
// app.use('/main', (error, req, res, next)=>{
//   console.log("error happend")
//   res.send('server error')  
//   next()
// })


// run sever 
app.listen(port, "localhost", () => {
  console.log(`server is running on http://localhost:${port}`)
})

export default app
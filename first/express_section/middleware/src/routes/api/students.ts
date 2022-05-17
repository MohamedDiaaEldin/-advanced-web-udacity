const express = require('express')
// import logger from '../../utilities/logger'

const students = express.Router()

students.get('/' , (request, response)=>{      
    response.send(`students routes`)          
  })
  

export default students
const exprees = require('express')
// import logger from "../../utilities/logger"

const teachers = exprees.Router()
teachers.get('/',(request, response)=>{      
    response.send(`teachers routes`)          
})
  

export default teachers
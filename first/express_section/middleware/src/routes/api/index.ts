const express = require('express')
import logger from '../../utilities/logger'
import students from "./students"
import teachers from "./teachers"

const api_routers = express.Router()

//// for all routes with in logger
// api_routers.use(logger)

api_routers.get('/', (request, response) => {
    response.send(`api route`)
})

// apply loger for only this end point 
// middleware 
api_routers.use('/students', logger, students)


api_routers.use('/teachers', teachers)



export default api_routers 
import express from 'express'

const app = express()
const port = 5000

app.get('/api', (req, res)=>{
    res.send('hello')
})

app.listen(port, ()=>{
    console.log(`Listing on port ${port}`)
})

export default app

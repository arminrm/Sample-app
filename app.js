const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

const port = 3000

app.use(express.static('./public'))
app.use(express.json()) //if we dont use this, we wont have the data in req.body
app.use('/api/v1/tasks', tasks)
app.use(notFound)
//app.get('/api/v1/tasks')
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id')
//app.put('/api/v1/tasks/:id')
//app.delete('/api/v1/tasks/:id')

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }
    catch(error){
        console.log(error)
    }
}

start()

// 1) create basic structure for routes + 
// 2) create db
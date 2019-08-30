const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const moment = require('moment')
// var now = moment()

// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const getRoute = require('./routes/viewData')
dotenv.config()
//Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },() => 
console.log('connected to DB')
) 

//middleware
app.use(express.json())


//Routes Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/data',getRoute)

app.listen(3000, () => console.log('Server running'))
 const express = require('express')
 const bodyParser = require('body-parser')
 const mongoose = require('mongoose')
 const http = require('http')
 const { routes } = require('./src/routes/index')

mongoose.connect(
    'mongodb://localhost:27017/',
    {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }
)

 const app = express()
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 routes.forEach((item) => {
     app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
 })

 const PORT = 3000
 http.createServer({}, app).listen(PORT)
 console.log('hello')

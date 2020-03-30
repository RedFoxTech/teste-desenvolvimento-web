require('dotenv').config()
const express = require('express')
const app = express()
const getRoutes = require('./routes/get')
const insertRoutes = require('./routes/insert')
const updateRoutes = require('./routes/update')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://albertojnk:'+ process.env.MONGODB_PASSWORD +'@cluster0-ofgsd.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})


var corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions))
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use('/', getRoutes)
app.use('/', insertRoutes)
app.use('/', updateRoutes)
app.listen(3000, () => {
  console.log('Server listening on :3000')
})
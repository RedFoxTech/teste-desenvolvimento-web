const express = require('express')
const app = express()

const routes = require('./routes')
const connection = require('../database/db')



app.use(express.json())
app.use(routes)

connection
    .authenticate()
    .then(() => console.log('Connected to the database...'))



app.listen(8080, () => console.log('Server is running... '))


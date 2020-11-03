const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.alsv8.mongodb.net/pokemon-challenge?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true  
})

app.use(routes)

app.listen(3333)
console.log('Subiu')
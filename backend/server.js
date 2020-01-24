const express = require('express')
const cors = require('./cors/cors')
const app = express()



app.use(cors)
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/pokemons', require('./routes/router'))


const port = 3030
app.listen(port,()=>{
    console.log(`listening in port ${port}`)
})


const express = require('express')
const app = express()
const routes = require('./routes')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors')


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Teste consumindo dados de arquivo excel",
            version: "1.0.0",
            description: "A simple Express Library API"
        },
        servers: [
            {
                url: "https://consuming-excel-backend.herokuapp.com/"
            },
            {url: "http://localhost:3001/"}
        ]
    },
    apis: ['./docs/*.yaml'],
    
}

const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3001, () => {
    console.log('Executando...') 
})
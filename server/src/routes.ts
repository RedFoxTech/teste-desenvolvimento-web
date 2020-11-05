import {Router} from 'express'
const routes = Router()

routes.get('/pokemon', (req, res)=>{
    res.status(200).send({
        mensagem: 'Olá mundo'
    })
})

routes.get('/pokemon/:id', (req, res)=>{
    res.status(200).send({
        mensagem: 'Olá mundo'
    })
})


export default routes
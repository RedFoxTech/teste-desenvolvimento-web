const router = require('express').Router()
const Pokemon = require('../database/schema')

router.get('/', async(req,res)=>{
    try{
        const response = await Pokemon.find().sort({createdAt:-1})
        res.json(response)
    }catch(err){
        res.status(500).json({msg: "Erro no Servidor"})
    }
})

router.get('/:name', async(req,res)=>{
    try{
        const response = await Pokemon.find({name: req.params.name })
        res.json(response)
    }catch(err){
        res.status(500).json({msg: "Erro no Servidor"})
    }
})

router.post('/', async(req,res)=>{
    try{
        const poke = new Pokemon(req.body)
        // console.log(poke)
        await poke.save()
        res.json(poke)
        
    }catch(err){
        console.log(err.message)
        res.status(500).json({msg: "Erro no Servidor"})
    }
})

router.put('/:_id', async(req,res) =>{
    try{
        await Pokemon.findByIdAndUpdate(req.params._id,{
            $set:req.body   
        },{new:false})
        const poke = new Pokemon(req.body)
        res.json(poke)
    }catch(err){
        res.status(500).json({msg: "Erro no Servidor"})
    }
})

router.delete('/:_id', async(req,res)=>{
    try{
        await Pokemon.findByIdAndDelete(req.params._id)
        const poke = new Pokemon(req.body)
        res.json(poke)
    }catch(err){
        res.status(500).json({msg: "Erro no Servidor"})
    }
})

module.exports = router
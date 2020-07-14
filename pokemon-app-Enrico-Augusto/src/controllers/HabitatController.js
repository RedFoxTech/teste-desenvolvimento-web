const mongoose = require('../database/database');
require('../model/habitat');
const Habitat = mongoose.model('habitat');
require('../model/pokemon');
const Pokemon = mongoose.model('pokemon');
require('../model/type');
const Type = mongoose.model('type');

class HabitatController{
    route(){
        return {
            getPost: '/habitat',
            editRemove: '/habitat/:id'
        }
    }

    show(){                
        return ((req, res)=>{            
            Habitat.find().lean().populate(['type', 'pokemon'])
            .then(habitat => {
                res.json(habitat);
            })
            .catch(err => {
                res.status(400).json({err: 'Erro'})
            })
        })
    }

    save(){
        return (async (req, res)=>{
            
            try {
                const habitat = await Habitat.create(req.body);
                habitat.save();
                res.json({ok: 'Salvo com sucesso'});
            } catch (error) {
                console.log(error);                
                res.status(400).json({err: 'error'})
            }
        })
    }

    remove(){
        return (async (req, res)=>{
            try {
                const id = req.params.id;
                await Habitat.deleteOne({'_id': id})
                .then(() => {
                    res.json({ok: 'Habitat removido com sucesso'})
                })
            } catch (error) {
                res.status(400).json({err: error})
            }
        })
    }

    edit(){
        return (async (req, res)=>{
            try {
                const id = req.params.id;                
                res.json({ok: 'Atualizado com sucesso'})
            } catch (error) {
                res.status(400).json({err: error})
            }
        })
    }

    selectOne(){
        return ((req, res)=>{
            try {
                const id = req.params.id;
                Habitat.findOne({'_id': id}).lean().populate(['type', 'pokemon'])
                .then(habitat => {
                    res.json(habitat)
                })
                .catch(err => {
                    res.status(400).json(err)
                })                
            } catch (error) {                
                res.status(400).json({erro: error})                
            }
        })
    }
}

module.exports = HabitatController;
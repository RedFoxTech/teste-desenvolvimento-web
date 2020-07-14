const mongoose = require('../database/database')
require('../model/type')
const Type = mongoose.model('type')

class TypeController{
    route(){
        return {
            getPost: '/type',
            editRemove: '/type/:id'
        }
    }

    show(){
        return ((req, res)=>{
            Type.find().lean().populate(['habitat', 'pokemon'])
            .then(type => {
                res.json(type);
            })
            .catch(err => {
                res.status(400).json({err: 'Erro'})
            })
        })
    }

    save(){
        return (async (req, res)=>{
            
            try {
                const type = await Type.create(req.body);
                type.save();
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
                await Type.deleteOne({'_id': id})
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
                Type.findOne({'_id': id}).lean().populate(['habitat', 'pokemon'])
                .then(type => {
                    res.json(type)
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

module.exports = TypeController;
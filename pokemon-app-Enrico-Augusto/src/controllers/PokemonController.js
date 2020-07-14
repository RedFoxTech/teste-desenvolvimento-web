const mongoose = require('../database/database');
require('../model/pokemon');
const Pokemon = mongoose.model('pokemon');
require('../model/habitat');
const Habitat = mongoose.model('habitat');
require('../model/type')
const Type = mongoose.model('type')

class PokemonController {

    route(){
        return {
            getPost: '/pokemon',
            editRemove: '/pokemon/:id'
        }
    }

    show(){
        return ((req, res)=>{
            Pokemon.find().lean().populate(['habitat', 'type'])
            .then(pokemon => {
                console.log(pokemon);
                
                res.json(pokemon);
            })
            .catch(err => {
                res.status(400).json({err: 'Erro'})
            })
        })
    }

    save(){
        return (async (req, res)=>{            
            try {
                let {habitat, type, name, weight, height, defeat_experience} = req.body;                
                
                if(habitat != null){
                    const habitatModel = await Habitat.findOne({'name': habitat});
                    habitat = habitatModel._id
                }
                if(type != null){
                    const typeModel = await Type.findOne({'name': type});
                    type = typeModel._id;                    
                }
                console.log(type);
                
                const pokemon = await Pokemon.create({name, weight, height, defeat_experience, habitat, type});
                pokemon.save();

                if(habitat != null){
                    const habitatModel = await Habitat.findOne({'_id': habitat});
                    habitatModel.pokemon.push(pokemon);                                
                    habitatModel.save();
                }
                if(type != null){
                    const typeModel = await Type.findOne({'_id': type});
                    typeModel.pokemon.push(pokemon);
                    typeModel.save();
                }
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
                await Pokemon.deleteOne({'_id': id})
                .then(() => {
                    res.json({ok: 'Pokemon removido com sucesso'})
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
                // await Pokemon.findByIdAndUpdate({'_id': id},)
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
                console.log(id);
                
                Pokemon.findOne({'_id': id}).lean().populate(['type', 'habitat'])
                .then(pokemon => {
                    res.json(pokemon)
                })
                .catch(err => {
                    console.log(err);
                    
                    res.status(400).json(err)
                })                
            } catch (error) {
                console.log(error);
                res.status(400).json({erro: error})                
            }
        })
    }
}

module.exports = PokemonController;
import {Request, Response} from 'express'
import knex from '../database/connection'

class PokemonController{
    async create (req: Request, res:Response){
        //campos de inserção, como se fosse input 
        const {
            namePokemon,
            generation,
            evolutionStage,
            evolved,
            familyId,
            cross,
            type1,
            type2,
            weather1,
            weather2,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            newPoke,
            notGettable,
            futureEvolved,
            cp40,
            cp39
        } = req.body
     

        const pokemon = {
            //nome de cada coluna no banco de dados
            image: req.file.filename,
            namePokemon,
            generation,
            evolutionStage,
            evolved,
            familyId,
            cross,
            type1,
            type2,
            weather1,
            weather2,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            newPoke,
            notGettable,
            futureEvolved,
            cp40,
            cp39
        }
    
        const insertedPoke = await knex('pokemon').insert(pokemon)
        const pokedexNumber = insertedPoke[0]
        return res.json({
            //retornando todos os objetos da const pokemon após criação
            pokedexNumber: pokedexNumber,
            ...pokemon,
        })
    }

    async index(req: Request, res: Response){
        //buscando todos os registros com todos os detalhes
            const pokemon = await knex('pokemon').select('*') 
            const serializedPokemon = pokemon.map(poke=>{
                return {
                    ...poke,
                    image_url: `http://localhost:3333/uploads/${poke.image}`
                }
            })
            return res.json(serializedPokemon)
    }

    async show(req: Request, res: Response){
        //buscando apenas um pokemon especifico
        //req.params faz a requisição do Id e retorna na variavel pokemonId para encontrar o id do pokemon
        const pokedexNumber = req.params.pokedexNumber
        const pokemonId = await knex('pokemon').where('pokedexNumber', pokedexNumber).first()
        //Caso o Id do pokemon for inválido, retorna status 400
        if(!pokedexNumber){
            return res.status(400).json({message: 'pokemon not found'})
        }

        const serializedPoke = {
                ...pokemonId,
                image_url: `http://localhost:3333/uploads/${pokemonId.image}`
            
        }
        return res.json(serializedPoke)
    }
}

export default PokemonController
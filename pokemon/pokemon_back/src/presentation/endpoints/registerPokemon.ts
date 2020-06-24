import { Request, Response } from "express";
import { PokemonDB } from "../../data/pokemonDatabase";
import { RegisterPokemonUC } from "../../business/usecase/pokemon/registerPokemon";

export const RegisterPokemonEndpoint = async(req: Request, res: Response) =>{
    try{
        const registerPokemonUC = new RegisterPokemonUC(new PokemonDB());
        const result = await registerPokemonUC.execute({
            pokedexID: req.body.pokedexID,
            name: req.body.name,
            img: req.body.img,
            generation: req.body.generation,
            envolved: req.body.envolved,
            familyID: req.body.familyID,
            cross_gen: req.body.cross_gen,
            type1: req.body.type1,
            type2: req.body.type2,
            weather1: req.body.weather1,
            weather2: req.body.weather2,
            stat_total: req.body.stat_total,
            atk: req.body.atk,
            def: req.body.def,
            sta: req.body.sta,
            shiny: req.body.shiny
        })

        res.status(200).send(result)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}
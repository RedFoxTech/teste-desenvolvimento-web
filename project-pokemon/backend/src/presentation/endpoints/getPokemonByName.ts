import { Request, Response } from "express";
import { GetPokemonByNameUC } from "../../business/usecase/getPokemonByNameUC";
import { PokemonDB } from "../../data/pokemonsDB";

export const GetPokemonByNameEndPoint = async(req: Request, res: Response) =>{
        try{
            const getPokemonByNameUC = new GetPokemonByNameUC(new PokemonDB())
            const result = await getPokemonByNameUC.execute({
                nameOfPokemon: req.params.nameOfPokemon
            })
            res.status(200).send(result)
        }catch (err) {
            res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
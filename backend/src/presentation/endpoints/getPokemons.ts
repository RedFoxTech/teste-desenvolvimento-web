import { Request, Response } from "express";
import { GetPokemonsUC } from "../../business/usecase/getPokemonsUC";
import { PokemonDB } from "../../data/pokemonDB";

export const getPokemonsEndpoint = async(req: Request, res: Response) => {

    try{
        const getPokemonsUC = new GetPokemonsUC(new PokemonDB())
        const result = await getPokemonsUC.execute({
            page: req.body.page
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }

}
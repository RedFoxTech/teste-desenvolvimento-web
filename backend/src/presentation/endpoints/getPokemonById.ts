import { Request, Response } from "express";
import { PokemonDB } from "../../data/pokemonDB";
import { GetPokemonByIdUC } from "../../business/usecase/getPokemonById";

export const getPokemonByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getPokemonByIdUC = new GetPokemonByIdUC(new PokemonDB())
        const response = await getPokemonByIdUC.execute({
            pokemonId: req.params.pokemonId
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
import { Request, Response } from "express";
import { PokemonDB } from "../../data/pokemonDB";
import { GetPokemonByNameOrNumberUC } from "../../business/usecase/getPokemonByNameOrNumberUC";

export const getPokemonByNameOrNumberEndpoint = async (req: Request, res: Response) => {
    try {
        const getPokemonByNameOrNumberUC = new GetPokemonByNameOrNumberUC(new PokemonDB())
        const response = await getPokemonByNameOrNumberUC.execute({
            nameOrNumber: req.params.nameOrNumber
        })

        res.status(200).send(response)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
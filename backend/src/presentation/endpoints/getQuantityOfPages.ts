import { Request, Response } from "express";
import { PokemonDB } from "../../data/pokemonDB";
import { GetQuantityOfPagesUC } from "../../business/usecase/getQuantityOfPagesUC";

export const getQuantityOfPagesEndpoint = async (req: Request, res: Response) => {
    try {
        const getQuantityOfPagesUC = new GetQuantityOfPagesUC(new PokemonDB())
        const result = await getQuantityOfPagesUC.execute()
        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
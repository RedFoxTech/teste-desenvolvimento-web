import { Request, Response } from "express";
import { QuantityOfPageUC } from "../../business/usecase/QuantityOfPageUC";
import { PokemonDB } from "../../data/pokemonsDB";


export const QuantityOfPageEndPoint = async(req: Request, res: Response) => {
        try{
            const quantityOfPageUC = new QuantityOfPageUC(new PokemonDB())
            const result = await quantityOfPageUC.execute()
            res.status(200).send(result)
        }catch (err) {
            res.status(err.errorCode || 400).send({
                message: err.message
        })
    }
}
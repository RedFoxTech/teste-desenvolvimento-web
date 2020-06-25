import { Request , Response } from "express"
import { DeletePokemonUC } from "../../business/usecase/pokemon/deletePokemonUC"
import { PokemonDB } from "../../data/pokemonDatabase"

export const DeletePokemonEndpoint = async(req: Request, res: Response ) => {
    try{
        const deletePokemonUC = new DeletePokemonUC(new PokemonDB());
        const result = await deletePokemonUC.execute({
            id: req.params.id
        })

        res.status(200).send(result)

    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}
import { Request, Response } from 'express';
import { GetAllPokemonsUC } from '../../business/usecase/pokemon/getAllPokemonsUC';
import { PokemonDB } from '../../data/pokemonDatabase';

export const GetAllPokemonsEndpoint = async (req: Request, res: Response) => {
    try {
        const getAllPokemonsUC = new GetAllPokemonsUC(new PokemonDB());

        const result = await getAllPokemonsUC.execute({
            page: req.body.page
        })
        res.status(200).send({
            result
        })

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

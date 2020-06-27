import { Request, Response } from 'express';
import { GetPokemonByNameOrPokedexIdUC } from '../../business/usecase/getPokemonByNameOrPokedexIdUC';
import { PokemonDB } from '../../data/pokemonDatabase';


export const GetPokemonsByNameOrPokedexIDEndpoint = async (req: Request, res: Response) => {
    try {
        const getPokemonsByNameOrPokedexID = new GetPokemonByNameOrPokedexIdUC(new PokemonDB());
        const result = await getPokemonsByNameOrPokedexID.execute({
            nameOrPokedexID: req.query.nameOrPokedexID as string
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

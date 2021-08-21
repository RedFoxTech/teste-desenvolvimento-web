import { Request, Response } from 'express';

import FindPokemonsService from '../../../services/FindPokemonsService';
import ImportPokemonsService from '../../../services/ImportPokemonsService';

import FindPokemonsDTO from '../../../dtos/FindPokemonsDTO';
class PokemonsController {
    async find(req: Request, res: Response) {
        try {
            const {
                name,
                type
            }: FindPokemonsDTO = req.query;

            const findPokemonsService = new FindPokemonsService();

            const pokemons = await findPokemonsService.findPokemons({
                name,
                type
            });

            return res.status(200).json({ pokemons });
        } catch(err) {
            console.log(err);

            return res.status(err.statusCode).json({ message: err.message });
        }
    };

    async importPokemonsFromXlsx(req: Request, res: Response) {
        try {
            const file = req.file;

            console.log(file);

            if(!file) {
                return res.status(400).json({
                    status: 'error',
                    message: 'file deve ser fornecido'
                });
            };

            const fileName = file.filename;

            const importPokemonService = new ImportPokemonsService();

            const uploadFile = await importPokemonService.importFromXlsx(fileName);

            return res.status(201).json({
                status: 'sucess',
                response_data: uploadFile
            });
        } catch(err) {
            console.log(err);

            return res.status(err.statusCode).json({ message: err.message });
        }
    }
};

export default PokemonsController;
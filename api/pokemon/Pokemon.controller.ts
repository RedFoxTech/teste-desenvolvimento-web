import { Request, Response } from 'express';
import pokemon from './Pokemon.model';
import PokemonXls from './PokemonXls';
import path from 'path';
import dataCaller from './DataCaller';
export default class PokemonController {
    public async create(req: Request, res: Response): Promise<Response> {
        const result = await dataCaller(pokemon.create.bind(pokemon, req.body));
        return res.json(result);
    }

    public async upload(req: Request, res: Response): Promise<Response> {
        const pokemonXls = new PokemonXls();
        if (!req.file) return res.json({ success: false, info: 'No file uploaded' });
        if (!pokemonXls.validate(req.file.mimetype)) {
            return res.json({
                success: false,
                info: `${req.file.originalname} is not valid (.xls / .xslx) excel file`
            });
        }
        const pokemons = await pokemonXls.parse(req.file.path);
        const result = await dataCaller(pokemon.insertMany.bind(pokemon, pokemons));
        return res.json(result);
        
    }

    public async download(req: Request, res: Response): Promise<void> {
        return res.sendFile(path.join(process.cwd(), 'Pokemon_Go.xlsx'));
    }

    public async listLength(req: Request, res: Response): Promise<Response> {        
        const searchKey = req.param('searchkey')
        let criteria = {};
        if (searchKey) {
            criteria = {name: {'$regex': new RegExp(searchKey, 'igm')}};
        }
        const list = await pokemon.count(criteria);
        return res.json({
            success: true, 
            info: {
                pages: Math.round(list / 10),
                pokemons: list
            }
        });
    }

    public async list(req: Request, res: Response): Promise<Response> {
        try {
            const intervalResult = 10;
            const currentPage = +req.param('page') || 0;
            const skip = intervalResult * currentPage;
            const searchKey = req.param('searchkey')
            let criteria = {};
            if (searchKey) {
                criteria = {name: {'$regex': new RegExp(searchKey, 'igm')}};
            }
            const pokemons = await pokemon.find(criteria)
                .limit(intervalResult)
                .skip(skip)
            return res.json({ success: true, info: pokemons });
        }
        catch (err) {
            return res.json({ success: false, info: err.message })
        }
    }

    public async listOne(req: Request, res: Response): Promise<Response> {
        const result = await dataCaller(pokemon.findById.bind(pokemon, req.params._id));
        return res.json(result);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const result = await dataCaller(pokemon.findByIdAndUpdate.bind(pokemon), req.params._id, req.body)
        return res.json(result);
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        const result = await dataCaller(pokemon.findOneAndRemove.bind(pokemon,  { _id: req.params._id }));
        return res.json(result);
    }

    public async removeMany(req: Request, res: Response): Promise<Response> {
            const result = await dataCaller(pokemon.deleteMany.bind(pokemon), {
                _id: {
                    $in: req.body
                }
            });
            return res.json(result);
    }

}


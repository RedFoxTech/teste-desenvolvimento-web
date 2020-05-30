import { Request, Response } from 'express';
import pokemon from './Pokemon.model';
import PokemonXls from './PokemonXls';
import path from 'path';

export default class PokemonController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const created = await pokemon.create(req.body);
            return res.json({ success: true, info: created });
        }
        catch (err) {
            return res.json({ success: false, info: err.message });
        }
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

        try {
            const pokemons = await pokemonXls.parse(req.file.path);
            const saved = await pokemon.insertMany(pokemons);
            return res.json({ success: true, info: saved });
        }
        catch (err) {
            console.log(err);
            return res.json({ success: false, info: err.message });
        }
    }

    public async download(req: Request, res: Response): Promise<void> {
        return res.sendFile(path.join(process.cwd(), 'Pokemon_Go2.xlsx'));
    }

    public async listLength(req: Request, res: Response): Promise<Response> {
        try {
            const list = await pokemon.count({});
            return res.json({
                success: true, 
                info: {
                    pages: Math.round(list / 10),
                    pokemons: list
                }
            });
        } catch (err) {
            console.log(err);
            return res.json({success: false, info: err.message});
        }
    }

    public async list(req: Request, res: Response): Promise<Response> {
        try {
            const intervalResult = 10;
            const currentPage = +req.param('page') || 0;
            const skip = intervalResult * currentPage;
            const pokemons = await pokemon.find()
                .limit(intervalResult)
                .skip(skip)
            return res.json({ success: true, info: pokemons });
        }
        catch (err) {
            return res.json({ success: false, info: err.message })
        }
    }

    public async listOne(req: Request, res: Response): Promise<Response> {
        try {
            const found = await pokemon.findById(req.params._id)
            return res.json({ success: true, info: found })
        }
        catch (err) {
            return res.json({ success: false, info: err.message })
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const updated = await pokemon.findByIdAndUpdate(req.params._id, req.body)
            return res.json({ success: true, info: updated })
        }
        catch (err) {
            return res.json({ success: false, info: err.message })
        }
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        try {
            const deleted = await pokemon.findOneAndRemove({ _id: req.params._id })
            return res.json({ success: true, info: deleted })
        }
        catch (err) {
            return res.json({ success: false, info: err.message })
        }
    }

    public async removeMany(req: Request, res: Response): Promise<Response> {
        console.log('body')
        try {
            const deleted = await pokemon.deleteMany({
                _id: {
                    $in: req.body
                }
            });
            return res.json({success: true, deleted: deleted});
        } catch (err) {
            return res.json({success: false, info: err.message});
        }
    }

}


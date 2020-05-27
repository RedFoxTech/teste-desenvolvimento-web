import { Request, Response } from 'express';
import pokemon from './Pokemon.model';
import PokemonXls from './PokemonXls';

export default class PokemonController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const created = await pokemon.create(req.body);
            return res.json({ success: true, data: created });
        }
        catch (err) {
            return res.json({ success: false, data: err.message });
        }
    }

    public async upload(req: Request, res: Response): Promise<Response> {
        const pokemonXls = new PokemonXls();
        console.log(req.body);
        if (!req.file) return res.json({ success: false, data: 'No file uploaded' });
        if (!pokemonXls.validate(req.file.mimetype)) {
            return res.json({
                success: false,
                data: `${req.file.originalname} is not valid (.xls / .xslx) excel file`
            });
        }

        try {
            const pokemons = await pokemonXls.parse(req.file.path);
            console.log(pokemons);
            return res.json({ success: true, data: pokemons });
        }
        catch (err) {
            return res.json({ success: false, data: err.message });
        }
    }

    public async list(req: Request, res: Response): Promise<Response> {
        try {
            const pokemons = await pokemon.find()
            return res.json({ success: true, data: pokemons });
        }
        catch (err) {
            return res.json({ success: false, data: err.message })
        }
    }

    public async listOne(req: Request, res: Response): Promise<Response> {
        try {
            const found = await pokemon.findById(req.params._id)
            return res.json({ success: true, data: found })
        }
        catch (err) {
            return res.json({ success: false, data: err.message })
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const updated = await pokemon.findByIdAndUpdate(req.params._id, req.body)
            return res.json({ success: true, data: updated })
        }
        catch (err) {
            return res.json({ success: false, data: err.message })
        }
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        try {
            const deleted = await pokemon.findOneAndRemove({ _id: req.params._id })
            return res.json({ success: true, data: deleted })
        }
        catch (err) {
            return res.json({ success: false, data: err.message })
        }
    }

}


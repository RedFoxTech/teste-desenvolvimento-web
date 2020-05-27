import { Request, Response } from 'express';
import pokemon from './Pokemon.model';

export default class PokemonController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const created = await pokemon.create(req.body);
            return res.json({ success: true, data: created });
        }
        catch (err) {
            return res.json({ success: false, data: err });
        }
    }

    public async upload(req: Request, res: Response): Promise<Response> {
        try {

        }
        catch (err) {

        }
    }

    public async list(req: Request, res: Response): Promise<Response> {
        try {
            const pokemons = await pokemon.find()
            return res.json({ success: true, data: pokemons });
        }
        catch (err) {
            return res.json({ success: false, data: err })
        }
    }

    public async listOne(req: Request, res: Response): Promise<Response> {
        try {
            const found = await pokemon.findById(req.params._id)
            return res.json({ success: true, data: found })
        }
        catch (err) {
            return res.json({ success: false, data: err })
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const updated = await pokemon.findByIdAndUpdate(req.params._id, req.body)
            return res.json({ success: true, data: updated })
        }
        catch (err) {
            return res.json({ success: false, data: err })
        }
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        try {
            const deleted = await pokemon.findOneAndRemove({ _id: req.params._id })
            return res.json({ success: true, data: deleted })
        }
        catch (err) {
            return res.json({ success: false, data: err })
        }
    }

}


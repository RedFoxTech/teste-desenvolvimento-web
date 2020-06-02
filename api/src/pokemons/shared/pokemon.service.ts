import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PokemonService {

    constructor(
        @InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>
    ) { }

    async getAll() {
        return await this.pokemonModel.find().exec();
    }

    async getById(id: string) {
        return await this.pokemonModel.findById(id).exec();
    }

    async create(pokemon: Pokemon) {
        const createdPokemon = new this.pokemonModel(pokemon);
        return await createdPokemon.save();
    }

    async update(id: string, pokemon: Pokemon) {
        await this.pokemonModel.updateOne({ _id: id }, pokemon).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.pokemonModel.deleteOne({ _id: id }).exec();
    }
}

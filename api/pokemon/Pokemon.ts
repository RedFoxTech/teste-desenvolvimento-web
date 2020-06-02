import { Document } from 'mongoose';

export default interface Pokemon extends Document {
    name: string;
    pokedexNumber: number;
    imgNumber: number;
    type1: string;
    type2: string;
    generation: number;
    atk: number;
    def: number;
    sta: number;
    statTotal: number;
    legendary: number;
    evolutionStage: number;
    evolved: number;
    familyId: number;
    crossGen: number;
    weather1: string;
    weather2: string;
}
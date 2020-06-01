import mongoose, { Schema } from 'mongoose';
import Pokemon from './Pokemon';

const schema = new Schema({
    name: { type: String, required: true },
    imgNumber: { type: Number, required: false },
    type1: { type: String, required: true },
    type2: { type: String, required: false },
    weather1: { type: String, required: true },
    weather2: { type: String, required: false },
    generation: { type: Number, required: true },
    atk: { type: Number, required: true },
    def: { type: Number, required: true },
    sta: { type: Number, required: true },
    statTotal: { type: Number, required: true },
    legendary: { type: Number, required: true },
    evolutionStage: { type: Number, required: true },
    evolved: { type: Number, required: true },
});

export default mongoose.model<Pokemon>('Pokemon', schema)
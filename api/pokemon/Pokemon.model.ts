import mongoose, { Schema } from 'mongoose';
import Pokemon from './Pokemon';

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    imgNumber: { type: Number, required: false, unique: true },
    type1: { type: String, required: true, unique: false },
    type2: { type: String, required: false, unique: false },
    weather1: { type: String, required: true, unique: false },
    weather2: { type: String, required: false, unique: false },
    generation: { type: Number, required: true, unique: false },
    atk: { type: Number, required: true, unique: false },
    def: { type: Number, required: true, unique: false },
    sta: { type: Number, required: true, unique: false },
    statTotal: { type: Number, required: true, unique: false },
    legendary: { type: Number, required: true, unique: false },
    evolutionStage: { type: Number, required: true, unique: false },
    evolved: { type: Number, required: true, unique: false },
});

export default mongoose.model<Pokemon>('Pokemon', schema)
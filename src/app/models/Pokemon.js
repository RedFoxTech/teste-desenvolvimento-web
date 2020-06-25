import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import mongooseFindAndFilter from 'mongoose-find-and-filter';

const PokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    trim: true,
    default: null,
  },
  generation: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
    default: null,
  },
  evolutionStage: {
    type: Number,
    enum: [1, 2, 3],
    default: null,
  },
  evolved: {
    type: Boolean,
    default: null,
  },
  familyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
    default: null,
  },
  crossGeneration: {
    type: Boolean,
    default: null,
  },
  types: [
    {
      type: String,
      enum: [
        'bug',
        'dragon',
        'dark',
        'eletric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
      ],
      default: null,
    },
  ],
  weathers: [
    {
      type: String,
      enum: [
        'cloudy',
        'fog',
        'partly cloudy',
        'rainy',
        'snow',
        'sunny/clear',
        'windy',
      ],
      default: null,
    },
  ],
  atk: {
    type: Number,
    default: null,
  },
  def: {
    type: Number,
    default: null,
  },
  sta: {
    type: Number,
    default: null,
  },
  statTotal: {
    type: Number,
    default: null,
  },
  isLegendary: {
    type: Boolean,
    default: null,
  },
  aquireable: {
    type: String,
    enum: ['trainner', 'expert', 'master'],
    default: null,
  },
  spawns: {
    type: Boolean,
    default: null,
  },
  regional: {
    type: Boolean,
    default: null,
  },
  raidable: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: null,
  },
  hatchable: {
    type: Number,
    enum: [2, 5, 7, 10],
    default: null,
  },
  shiny: {
    type: Boolean,
    default: null,
  },
  nest: {
    type: Boolean,
    default: null,
  },
  new: {
    type: Boolean,
    default: true,
  },
  notGettable: {
    type: Boolean,
    default: null,
  },
  futureEvolve: {
    type: Boolean,
    default: null,
  },
  cp40: {
    type: Number,
    default: null,
  },
  cp39: {
    type: Number,
    default: null,
  },
});

PokemonSchema.set('toJSON', {
  transform(doc, ret, opt) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

PokemonSchema.plugin(mongoosePaginate);
PokemonSchema.plugin(mongooseFindAndFilter);

export default mongoose.model('Pokemon', PokemonSchema);

import { PokemonTypes } from "./PokemonTypes";

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  evolutionStage: number;
  type1: PokemonTypes;
  type2: PokemonTypes | null;
  statsTotal: number;
  atk: number;
  def: number;
  sta: number;
  isEvolved: boolean;
  isLegendary: boolean;
};

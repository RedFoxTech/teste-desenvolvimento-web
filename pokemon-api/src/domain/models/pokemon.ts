export type Pokemon = {
  id: string;
  name: string;
  pokedexNumber: number;
  imgName: number;
  generation: number;
  evolutionStage: number;
  evolved: boolean;
  familyID: number;
  crossGen: number;
  type1: string;
  type2: string;
  weather1: string;
  weather2: string;
  statTotal: number;
  atk: number;
  def: number;
  sta: number;
  legendary: boolean;
  aquireable: number;
  spawns: boolean;
  regional: boolean;
  raidable: number;
  hatchable: number;
  shiny: boolean;
  nest: boolean;
  new: boolean;
  notGettable: boolean;
  futureEvolve: boolean;
  cp40: number;
  cp39: number;
};

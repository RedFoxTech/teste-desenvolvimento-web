export interface ICreatePokemon {
  name: string;
  pokedexNumber: number;
  imgName: string;
  generation: number;
  evolutionStage?: string;
  evolved: number;
  familyID?: number;
  crossGen: number;
  type1: string;
  type2?: string;
  weather1: string;
  weather2?: string;
  statTotal: number;
  atk: number;
  def: number;
  sta: number;
  legendary: number;
  aquireable: number;
  spawns: number;
  regional: number;
  raidable: number;
  hatchable: number;
  shiny: number;
  nest: number;
  new: number;
  notGettable: number;
  futureEvolve: number;
  cp40: number;
  cp39: number;
}

export interface IUpdatePokemon {
  name?: string;
  pokedexNumber?: number;
  imgName?: string;
  generation?: number;
  evolutionStage?: string;
  evolved?: number;
  familyID?: number;
  crossGen?: number;
  type1?: string;
  type2?: string;
  weather1?: string;
  weather2?: string;
  statTotal?: number;
  atk?: number;
  def?: number;
  sta?: number;
  legendary?: number;
  aquireable?: number;
  spawns?: number;
  regional?: number;
  raidable?: number;
  hatchable?: number;
  shiny?: number;
  nest?: number;
  new?: number;
  notGettable?: number;
  futureEvolve?: number;
  cp40?: number;
  cp39?: number;
}

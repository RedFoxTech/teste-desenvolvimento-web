import { ReactNode } from "react";

interface IDefaultErrorResponse {
  error: string;
}

interface IDefaultProviderProps {
  children: ReactNode;
}

interface IContextProps {
  pokemonsData: IPokemonsData[];
  setPokemonsData: React.Dispatch<React.SetStateAction<IPokemonsData[]>>;
  fetchPokemons: () => Promise<void>;
}

interface IPokemonsData {
  _id: string;
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

export type {
  IDefaultErrorResponse,
  IDefaultProviderProps,
  IPokemonsData,
  IContextProps,
};

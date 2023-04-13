import { QueryParams } from "@/types/QueryParams";
import { Pokemon } from "@prisma/client";

interface PokemonPaginationResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: Pokemon[];
}

export interface iPokemonRepository {
  createAll: () => Promise<any>;

  findAll: (arg1: QueryParams) => Promise<PokemonPaginationResponse>;

  findOne: (id: number) => Promise<Pokemon | null>;
}

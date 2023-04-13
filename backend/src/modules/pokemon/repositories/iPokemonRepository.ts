import { Pokemon } from "@prisma/client";

export interface iPokemonRepository {
  createAll: () => Promise<any>;

  findAll: () => Promise<Pokemon[]>;

  findOne: (id: number) => Promise<Pokemon | null>;
}

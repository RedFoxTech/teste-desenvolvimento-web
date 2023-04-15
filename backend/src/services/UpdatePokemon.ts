import { prisma } from "../prisma";

interface IUpdatePokemon {
  id: string;
  name: string
  pokedexNumber: number
  type1 : string
  type2 : string
  weather1 : string
  weather2 : string
  atk: number
  def: number
}

export class UpdatePokemon {
  async execute({ id, name, pokedexNumber, type1, type2, weather1, weather2, atk, def }: IUpdatePokemon) {
    
    await prisma.pokemon.update({
      where: {
        id
      },
      data: {
        name, pokedexNumber, type1, type2, weather1, weather2, atk, def
      }
    });

  }
}

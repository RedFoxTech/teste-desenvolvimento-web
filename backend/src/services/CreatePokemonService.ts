import { prisma } from "../prisma";

interface ICreatePokemonService {
  name: string
  pokedexNumber: number
  type1 : string
  type2 : string
  weather1 : string
  weather2 : string
  atk: number
  def: number
  userId: string
}

export class CreatePokemonService {
  async execute({ name, pokedexNumber, type1, type2, weather1, weather2, atk, def, userId }: ICreatePokemonService) {

    const pokemon = await prisma.pokemon.create({
      data: {
        name,
        pokedexNumber,
        type1,
        type2,
        weather1,
        weather2,
        atk,
        def,
        userId,
      }
    })

    return pokemon;
  }
}

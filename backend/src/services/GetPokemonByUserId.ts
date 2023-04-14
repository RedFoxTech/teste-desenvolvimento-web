import { prisma } from "../prisma";

interface IGetPokemonsByUserId {
  userId: string;
}

export class GetPokemonsByUserId {
  async execute({ userId }: IGetPokemonsByUserId) {

    const findPokemons = await prisma.pokemon.findMany({
      where: {
        userId
      }
    })

    return findPokemons;
  }
}
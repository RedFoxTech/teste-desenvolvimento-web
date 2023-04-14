import { prisma } from "../prisma";

interface IGetPokemonById {
  id: string;
}

export class GetPokemonById {
  async execute({ id }: IGetPokemonById) {

    const findPokemon = await prisma.pokemon.findFirst({
      where: {
        id
      }
    })

    return findPokemon;
  }
}

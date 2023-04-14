import { prisma } from "../prisma";

export class DeletePokemons {
  async execute({ ids }) {

    await prisma.pokemon.deleteMany({
      where: {
        id: {
          in: ids
        }
      },
    })

  }
}

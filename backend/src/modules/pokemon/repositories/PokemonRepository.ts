import { PrismaClient } from "@prisma/client";
import { POKEMON_DATA } from "@/static/POKEMON_DATA";
import { iPokemonRepository } from "./iPokemonRepository";
import { HttpError } from "@/helpers/HttpError";
import { getPokemonsWithImages } from "@/helpers/api/getPokemonsWithImages";

export class PokemonRepository implements iPokemonRepository {
  constructor(private prisma: PrismaClient) {}

  async createAll() {
    const isThereDataAlready = !!(await this.prisma.pokemon.findFirst({
      where: {
        id: POKEMON_DATA[0].id,
      },
    }));

    if (isThereDataAlready)
      throw new HttpError({
        name: "Pokemon data has already be set",
        statusCode: 400,
        message: "all pokemon data already exists in the database",
      });

    const pokemonsWithImage = await getPokemonsWithImages();

    return await this.prisma.pokemon.createMany({
      data: pokemonsWithImage,
    });
  }

  async findAll() {
    const pokemonList = await this.prisma.pokemon.findMany();
    return pokemonList;
  }

  async findOne(pokemonId: number) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: {
        id: pokemonId,
      },
    });

    if (!pokemon)
      throw new HttpError({
        name: "Pokemon not founded",
        statusCode: 404,
        message: "no pokemon found with the provided id",
      });

    return pokemon;
  }
}

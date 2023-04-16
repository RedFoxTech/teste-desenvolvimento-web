import { PrismaClient } from "@prisma/client";
import { POKEMON_DATA } from "@/static/POKEMON_DATA";
import { iPokemonRepository } from "./iPokemonRepository";
import { HttpError } from "@/helpers/HttpError";
import { getPokemonsWithImages } from "@/helpers/api/getPokemonsWithImages";
import { QueryParams } from "@/types/QueryParams";

export class PokemonRepository implements iPokemonRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll({ offset, limit, name }: QueryParams) {
    const thereIsData = !!(await this.prisma.pokemon.findFirst({
      where: {
        id: POKEMON_DATA[0].id,
      },
    }));

    if (!thereIsData) {
      const pokemonsWithImage = await getPokemonsWithImages();

      await this.prisma.pokemon.createMany({
        data: pokemonsWithImage,
      });
    }

    const count = await this.prisma.pokemon.count();
    const next = offset + limit;
    const previous = offset - count < 0 ? null : offset - limit;
    const nextUrl = next < count ? `?limit=${limit}&offset=${next}` : null;
    const previousUrl =
      previous != null ? `?limit=${limit}&offset=${previous}` : null;

    const filteredPokemonList = await this.prisma.pokemon.findMany({
      skip: offset,
      take: limit,
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    return {
      count,
      previous: previousUrl,
      next: nextUrl,
      results: filteredPokemonList,
    };
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

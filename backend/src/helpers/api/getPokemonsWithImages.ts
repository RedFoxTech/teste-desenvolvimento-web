import axios from "axios";
import { POKEMON_DATA } from "@/static/POKEMON_DATA";
import { Pokemon } from "@prisma/client";

export const getPokemonsWithImages = async (): Promise<Pokemon[]> => {
  return await Promise.all(
    POKEMON_DATA.map(async (pokemon) => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
        );
        const pokeImg = res.data.sprites.other.dream_world
          .front_default as string;

        return {
          ...pokemon,
          image: pokeImg,
        };
      } catch {
        return {
          ...pokemon,
          image: "",
        };
      }
    })
  );
};

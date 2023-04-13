-- CreateEnum
CREATE TYPE "PokemonTypes" AS ENUM ('normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy');

-- CreateTable
CREATE TABLE "pokemons" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "evolutionStage" INTEGER NOT NULL,
    "type1" "PokemonTypes" NOT NULL,
    "type2" "PokemonTypes",
    "statsTotal" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "sta" INTEGER NOT NULL,
    "isEvolved" BOOLEAN NOT NULL,
    "isLegendary" BOOLEAN NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonGo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Row" INTEGER NOT NULL,
    "Name" TEXT,
    "PokedexNumber" INTEGER NOT NULL,
    "ImgName" TEXT,
    "Generation" INTEGER NOT NULL,
    "EvolutionStage" TEXT,
    "Evolved" INTEGER NOT NULL,
    "FamilyID" INTEGER,
    "CrossGen" BOOLEAN,
    "Type1" TEXT,
    "Type2" TEXT,
    "Weather1" TEXT,
    "Weather2" TEXT,
    "ATK" INTEGER NOT NULL,
    "DEF" INTEGER,
    "STA" INTEGER,
    "Legendary" INTEGER,
    "Aquireable" INTEGER,
    "Spawns" BOOLEAN,
    "Regional" BOOLEAN,
    "Raidable" INTEGER,
    "Hatchable" INTEGER,
    "Shiny" BOOLEAN,
    "Nest" BOOLEAN,
    "New" BOOLEAN,
    "FutureEvolve" BOOLEAN,
    "StatsTotal" INTEGER NOT NULL,
    "NotGettable" BOOLEAN,
    "CP40" INTEGER NOT NULL,
    "CP39" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "PokemonGo_Row_key" ON "PokemonGo"("Row");

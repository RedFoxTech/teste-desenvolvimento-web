/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as csv from 'csv-parser';

const prisma = new PrismaClient();

async function main() {
  const data = [];

  fs.createReadStream(__dirname + '/PokemonGo.csv')
    .pipe(csv({ separator: ',' }))
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', async () => {
      for (const item of data) {
        await prisma.pokemonGo.upsert({
            where: {
                Row: +item.Row,
            },
            update: {
              Name: String(item.Name),
              PokedexNumber: +item.PokedexNumber,
              ImgName: String(item.ImgName),
              Generation: +item.Generation,
              EvolutionStage: String(item.EvolutionStage),
              Evolved: +item.Evolved,
              FamilyID: +item.FamilyID,
              CrossGen: Boolean(item.CrossGen),
              Type1: String(item.Type1),
              Type2: String(item.Type2),
              Weather1: String(item.Weather1),
              Weather2: String(item.Weather2),
              ATK: +item.ATK,
              DEF: +item.DEF,
              STA: +item.STA,
              Legendary: +item.Legendary,
              Aquireable: +item.Aquireable,
              Spawns: Boolean(item.Spawns),
              Regional: Boolean(item.Regional),
              Raidable: +item.Raidable,
              Hatchable: +item.Hatchable,
              Shiny: Boolean(item.Shiny),
              Nest: Boolean(item.Nest),
              New: Boolean(item.New),
              FutureEvolve: Boolean(item.FutureEvolve),
              StatsTotal: +item.StatsTotal,
              NotGettable: Boolean(item.NotGettable),
              CP40: +item.CP40,
              CP39: +item.CP39
            },
            create: {
              Row: +item.Row,
              Name: String(item.Name),
              PokedexNumber: +item.PokedexNumber,
              ImgName: String(item.ImgName),
              Generation: +item.Generation,
              EvolutionStage: String(item.EvolutionStage),
              Evolved: +item.Evolved,
              FamilyID: +item.FamilyID,
              CrossGen: Boolean(item.CrossGen),
              Type1: String(item.Type1),
              Type2: String(item.Type2),
              Weather1: String(item.Weather1),
              Weather2: String(item.Weather2),
              ATK: +item.ATK,
              DEF: +item.DEF,
              STA: +item.STA,
              Legendary: +item.Legendary,
              Aquireable: +item.Aquireable,
              Spawns: Boolean(item.Spawns),
              Regional: Boolean(item.Regional),
              Raidable: +item.Raidable,
              Hatchable: +item.Hatchable,
              Shiny: Boolean(item.Shiny),
              Nest: Boolean(item.Nest),
              New: Boolean(item.New),
              FutureEvolve: Boolean(item.FutureEvolve),
              StatsTotal: +item.StatsTotal,
              NotGettable: Boolean(item.NotGettable),
              CP40: +item.CP40,
              CP39: +item.CP39
            },
        });
      }

      await prisma.$disconnect();
    });
}

main();

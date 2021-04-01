import { Response, Request } from "express";
import Pokemon, { PokemonInterface } from "../models/Pokemon";

const getPokemons = async (req: Request, res: Response): Promise<void> => {
  try {
    const pokemons: PokemonInterface[] = await Pokemon.find({});

    const count = await Pokemon.countDocuments();
    console.log(count);
    res.json(pokemons);
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const getPokemonByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.params.name.toString();

    //const namesearch = new RegExp(name, "i");
    //const namesearch = { $regex: name, $options: "i" };

    //console.log(namesearch);

    const pokemon: PokemonInterface[] = await Pokemon.find({
      Name: name,
    });

    if (pokemon[0]) {
      res.status(200);
      res.json(pokemon);
    } else {
      res.status(404);
      res.json({ erro: "Pokemon não encontrado" });
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const createPokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      PokemonInterface,
      | "Row"
      | "Name"
      | "Pokedex Number"
      | "Img name"
      | "Generation"
      | "Evolution Stage"
      | "Evolved"
      | "FamilyID"
      | "Cross Gen"
      | "Type 1"
      | "Type 2"
      | "Weather 1"
      | "Weather 2"
      | "STAT TOTAL"
      | "ATK"
      | "DEF"
      | "STA"
      | "Legendary"
      | "Aquireable"
      | "Spawns"
      | "Regional"
      | "Raidable"
      | "Hatchable"
      | "Shiny"
      | "Nest"
      | "New"
      | "Not-Gettable"
      | "Future Evolve"
      | "100% CP @ 40"
      | "100% CP @ 39"
    >;

    const pokemon: PokemonInterface = new Pokemon({
      Row: body.Row,
      Name: body.Name,
      "Pokedex Number": body["Pokedex Number"],
      "Img name": body["Img name"],
      Generation: body.Generation,
      "Evolution Stage": body["Evolution Stage"],
      Evolved: body.Evolved,
      FamilyID: body.FamilyID,
      "Cross Gen": body["Cross Gen"],
      "Type 1": body["Type 1"],
      "Type 2": body["Type 2"],
      "Weather 1": body["Weather 1"],
      "Weather 2": body["Weather 2"],
      "STAT TOTAL": body["STAT TOTAL"],
      ATK: body.ATK,
      DEF: body.DEF,
      STA: body.STA,
      Legendary: body.Legendary,
      Aquireable: body.Aquireable,
      Spawns: body.Spawns,
      Regional: body.Regional,
      Raidable: body.Raidable,
      Hatchable: body.Hatchable,
      Shiny: body.Shiny,
      Nest: body.Nest,
      New: body.New,
      "Not-Gettable": body["Not-Gettable"],
      "Future Evolve": body["Future Evolve"],
      "100% CP @ 40": body["100% CP @ 40"],
      "100% CP @ 39": body["100% CP @ 39"],
    });

    await pokemon.save();

    res.status(201).json({
      Row: pokemon.Row,
      Name: pokemon.Name,
      "Pokedex Number": pokemon["Pokedex Number"],
      "Img name": pokemon["Img name"],
      Generation: pokemon.Generation,
      "Evolution Stage": pokemon["Evolution Stage"],
      Evolved: pokemon.Evolved,
      FamilyID: pokemon.FamilyID,
      "Cross Gen": pokemon["Cross Gen"],
      "Type 1": pokemon["Type 1"],
      "Type 2": pokemon["Type 2"],
      "Weather 1": pokemon["Weather 1"],
      "Weather 2": pokemon["Weather 2"],
      "STAT TOTAL": pokemon["STAT TOTAL"],
      ATK: pokemon.ATK,
      DEF: pokemon.DEF,
      STA: pokemon.STA,
      Legendary: pokemon.Legendary,
      Aquireable: pokemon.Aquireable,
      Spawns: pokemon.Spawns,
      Regional: pokemon.Regional,
      Raidable: pokemon.Raidable,
      Hatchable: pokemon.Hatchable,
      Shiny: pokemon.Shiny,
      Nest: pokemon.Nest,
      New: pokemon.New,
      "Not-Gettable": pokemon["Not-Gettable"],
      "Future Evolve": pokemon["Future Evolve"],
      "100% CP @ 40": pokemon["100% CP @ 40"],
      "100% CP @ 39": pokemon["100% CP @ 39"],
    });
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

const deletePokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id.toString();

    if (Pokemon.findById(id)) {
      await Pokemon.findByIdAndDelete(id);
      res.status(204);
      res.end();
    } else {
      res.status(404);
      res.json({ erro: "ID não encontrada" });
    }
  } catch (err) {
    res.status(500);
    res.end();
    console.error("Error message:", err);
  }
};

export { getPokemons, getPokemonByName, createPokemon, deletePokemon };

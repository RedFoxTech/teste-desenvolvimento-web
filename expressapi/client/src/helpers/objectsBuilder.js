// helper functions
export function pokemonBuilder(body)
{

  const { name, pokedexnumber, imgname, generation, evolutionstage,
    evolved, familyid, crossgen, type1, type2, weather1, weather2,
    stattotal, atk, def, sta, legendary, aquireable, spawns,
    regional, raidable, hatchable, shiny, nest, newp, notgettable,
    futureevolve, hundredcp40, hundredcp39 } = body;

  let json = {
    _id: null,
    name: name,
    pokedexnumber: pokedexnumber,
    imgname: imgname,
    generation: generation,
    evolutionstage: evolutionstage,
    evolved: evolved,
    familyid: familyid,
    crossgen: crossgen,
    type1: type1,
    type2: type2,
    weather1: weather1,
    weather2: weather2,
    stattotal: stattotal,
    atk: atk,
    def: def,
    sta: sta,
    legendary: legendary,
    aquireable: aquireable,
    spawns: spawns,
    regional: regional,
    raidable: raidable,
    hatchable: hatchable,
    shiny: shiny,
    nest: nest,
    newp: newp,
    notgettable: notgettable,
    futureevolve: futureevolve,
    hundredcp40: hundredcp40,
    hundredcp39: hundredcp39
  };

  return json;
}


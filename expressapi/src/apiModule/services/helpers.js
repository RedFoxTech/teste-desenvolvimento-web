
const apiHelpers = {}

// helper functions
apiHelpers.newPokemon = (body) =>
{
    const { name, pokedexnumber, imgname, generation, evolutionstage,
        evolved, familyid, crossgen, type1, type2, weather1, weather2,
        stattotal, atk, def, sta, legendary, aquireable, spawns,
        regional, raidable, hatchable, shiny, nest, newp, notgettable,
        futureevolve, hundredcp40, hundredcp39 } = body;

    let json = {
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

apiHelpers.resolveImageURL = async (object, controllerModuleHandler) =>
{
    if (object.length > 0)
    {
        let pokemons = Object.values(object)

        for (let index = 0; index < pokemons.length; index++)
        {
            const document = pokemons[index];
            let pokemon = document._doc ? document._doc : null
            if (typeof pokemon.imgname == "string")
            {
                await fullPathResolve(controllerModuleHandler, pokemon);
            }
        }

        return pokemons
    }
    else
    {
        let pokemon = object
        if (pokemon.imgname)
        {
            await fullPathResolve(controllerModuleHandler, pokemon);
            return pokemon
        }
        else
        {
            return null
        }
    }

}


const fullPathResolve = async (controllerModuleHandler, pokemon) =>
{
    let directoryList = [];
    directoryList = await controllerModuleHandler.directoryListing(controllerModuleHandler.pathPokemons);
    for (let index = 0; index < directoryList.length; index++)
    {
        const file = directoryList[index];
        if (checkName(file.name, pokemon.imgname))
        {
            pokemon.imgname = controllerModuleHandler.filePathToURL(file.path + file.name)
        }
    }
}

const checkName = (fileName, partialName) =>
{
    let result = (typeof fileName == "string") ? fileName.split(".") : []

    if (result[0] === partialName)
    {
        return true
    }
    return false
}

apiHelpers.checkSingleDigit = (number) =>
{
    if (/^\d$/.test(number))
    {
        return `0${number}`;
    }
    return number;
}



module.exports = apiHelpers

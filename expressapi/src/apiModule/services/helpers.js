
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

apiHelpers.validateProperty = (propertyName) =>
{
    const dataStructure = apiHelpers.newPokemon("")

    if (typeof propertyName == "string")
    {
        for (let key of Object.keys(dataStructure)) 
        {
            //console.log("Current key: ", key)
            if (propertyName === key)
            {
                return true
            }
        }
    }
    return false
}

apiHelpers.resolveImageURL = async (object, controllerModuleHandler, req) =>
{
    let serverURL = req.protocol + '://' + req.get('host');
    if (object.length >= 1)
    {
        let pokemons = Object.values(object)

        for (let index = 0; index < pokemons.length; index++)
        {
            const document = pokemons[index];
            let pokemon = document._doc ? document._doc : null
            if (typeof pokemon.imgname == "string")
            {
                await resolveImagePath(controllerModuleHandler, pokemon, serverURL);
            }
        }
        return pokemons
    }
    return null
}


const resolveImagePath = async (controllerModuleHandler, pokemon, serverURL) =>
{
    let directoryList = [];
    directoryList = await controllerModuleHandler.storageModule.listFilesAndFolders(controllerModuleHandler.storageModule.pathPokemons);
    for (let index = 0; index < directoryList.length; index++)
    {
        const file = directoryList[index];
        if (checkName(file.name, pokemon.imgname))
        {
            pokemon.imgname = serverURL + "/images/" + file.name
            return true
        }
    }
}

const checkName = (fileName, documentFileName) =>
{
    let result = (typeof fileName === "string") ? fileName.split(".") : []

    if (result[0] === documentFileName)
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

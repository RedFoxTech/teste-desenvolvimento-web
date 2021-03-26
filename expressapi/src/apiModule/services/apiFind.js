const apiHelpers = require("./helpers");

const apiFind = {}

// Commented logger can be replaced by Telemetry API system

// Find pokemon by ID
apiFind.findPokemonById = async (req, res) =>
{
    let id = parseInt(req.params.id);
    const dbModel = req.app.locals.controllerModuleHandler.dbModel

    try
    {
        const pokemon = await dbModel.find({ pokedexnumber: id }).exec()

        await apiHelpers.resolveImageURL(pokemon, req.app.locals.controllerModuleHandler, req)

        if (!pokemon)
        {
            return res.status(404).send({ message: 'Pokemon não encontrado' });
        } else
        {
            res.send(pokemon);
        }
        //
        //logger.info(`GET /pokemon`);
    } catch (error)
    {
        res.status(500).send({ message: error.message || 'Erro ao listar pokemon', });
        // logger.error(`GET /pokemon - ${JSON.stringify(error.message)}`);
    }
};

// Selected property/value sent by the frontend can be used to select all pokemon that match
apiFind.findAllPokemonByProperty = async (req, res) =>
{
    const propertyName = req.query.name;
    const propertyValue = req.query.value;
    const dbModel = req.app.locals.controllerModuleHandler.dbModel

    //build filter
    let filter = null
    if ((typeof propertyName == "string") && (propertyValue != undefined) && (propertyValue != ""))
    {
        filter = { [propertyName]: propertyValue }
    }

    try
    {
        let pokemons;
        try
        {
            if (filter)
            {
                pokemons = await dbModel.find(filter).sort({ name: 1, });

                await apiHelpers.resolveImageURL(pokemons, req.app.locals.controllerModuleHandler, req)

                res.send(pokemons);
            }
        } catch (error)
        {
            // logger.error(`GET /PokemonByProperty - ${JSON.stringify(error.message)}`);
        }
        //
        //logger.info(`GET /PokemonByProperty - ${property}`);
    } catch (error)
    {
        res.status(500).send({ message: 'Erro ao buscar pokemons por propriedade: ' + property });
        // logger.error(`GET /PokemonByProperty - ${JSON.stringify(error.message)}`);
    }
};

// Find unique pokemons by property and cache ID for furter optimization
// apiFind.findUniquePokemon = async (req, res) =>
// {
//     let property = req;
//     //const dbModel = req.app.locals.controllerModuleHandler.dbModel
//     const dbConnection = req.app.locals.controllerModuleHandler.dbConnector.connection

//     try
//     {
//         try
//         {
//             property = await dbModel.find({})
//         } catch (error)
//         {
//             // logger.error(`GET /property - ${JSON.stringify(error.message)}`);
//         }

//         res.send(property);
//         //
//         //logger.info(`GET /property - ${period}`);
//     } catch (error)
//     {
//         res.status(500).send({ message: 'Erro ao buscar pokemons por propriedade: ' + property });
//         // logger.error(`GET /property - ${JSON.stringify(error.message)}`);
//     }
// };

module.exports = apiFind
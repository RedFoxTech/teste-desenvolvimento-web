const helpers = require('./helpers')

const apiInsert = {}

// Commented logger can be replaced by Telemetry API system

// Insert new pokemon
apiInsert.insertPokemon = async (req, res) =>
{
    const dbModel = req.app.locals.controllerModuleHandler.dbModel
    try
    {
        let newPokemonJSON = helpers.newPokemon(req.body);
        const pokemon = new dbModel(newPokemonJSON);
        await pokemon.save();
        res.send(pokemon);
        //
        //logger.info(`POST /pokemon - ${JSON.stringify()}`);
    } catch (error)
    {
        res.status(500).send({ message: error.message || 'Algum erro ocorreu ao salvar pokemon', });
        // logger.error(`POST /pokemon - ${JSON.stringify(error.message)}`);
    }
};

module.exports = apiInsert
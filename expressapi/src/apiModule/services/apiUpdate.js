const helpers = require('./helpers')

const apiUpdate = {}

// Commented logger can be replaced by Telemetry API system

// Update pokemon by ID
apiUpdate.updatePokemonById = async (req, res) =>
{
    const id = req.params.id;
    const dbModel = req.app.locals.controllerModuleHandler.dbModel

    if (!req.body)
    {
        return res.status(400).send({ message: 'Dados do pokemon inexistente', });
    }

    let newPokemonJSON = helpers.newPokemon(req.body);

    let pokemon = null;
    try
    {
        pokemon = await dbModel.deleteOne({ pokedexnumber: id }, newPokemonJSON).exec()

        res.send({ message: 'Pokemon atualizado com sucesso' });

        //logger.info(`PUT /pokemon - ${id} - ${JSON.stringify(req.body)}`);
    } catch (error)
    {
        res.status(500).send({ message: 'Erro ao atualizar o pokemon: ' + id });
        // logger.error(`PUT /pokemon - ${JSON.stringify(error.message)}`);
    }
};

module.exports = apiUpdate
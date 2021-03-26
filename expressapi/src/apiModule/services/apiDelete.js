const apiDelete = {}

// Commented logger can be replaced by Telemetry API system

// Delete pokemon by ID
apiDelete.deletePokemonById = async (req, res) =>
{
    const id = req.params.id;
    const dbModel = req.app.locals.controllerModuleHandler.dbModel

    try
    {
        //const pokemon = await dbModel.findByIdAndDelete(id);
        const pokemon = await dbModel.deleteOne({ pokedexnumber: id }).exec()

        if (!pokemon)
        {
            return res.status(404).send({ message: 'Pokemon não encontrado' });
        } else
        {
            res.send({ message: 'Pokemon excluido com sucesso' });
        }
        //logger.info(`DELETE /pokemon - ${id}`);
    } catch (error)
    {
        res.status(500).send({ message: 'Nao foi possivel deletar o pokemon: ' + id });
        // logger.error(`DELETE /pokemon - ${JSON.stringify(error.message)}`);
    }
};

// Selected property/value sent by the frontend can be used to select all pokemon that match
apiDelete.removeAllPokemonByProperty = async (req, res) =>
{
    const propertyName = req.query.name;
    const propertyValue = req.query.value;
    const dbModel = req.app.locals.controllerModuleHandler.dbModel

    //build filter
    let filter = null
    if ((typeof propertyName == "string") && (propertyValue != undefined) && (propertyValue != ""))
    {
        //filter = { [propertyName]: { $regex: new RegExp(propertyValue), $options: 'i' } };
        filter = { [propertyName]: propertyValue }
    }

    try
    {
        if (filter)
        {
            await dbModel.deleteMany(filter);

            res.send({ message: `Pokemons excluidos`, });
            //logger.info(`DELETE /pokemons`);
        }
    } catch (error)
    {
        res.status(500).send({ message: 'Erro ao excluir pokemons pela propriedade: ' + propertyValue, });
        // logger.error(`DELETE /pokemons - ${JSON.stringify(error.message)}`);
    }
};

module.exports = apiDelete
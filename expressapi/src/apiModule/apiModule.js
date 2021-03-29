
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path');
const dotenv = require('dotenv');

const apiModule = {}

apiModule.initialize = async (controllerModuleHandler) =>
{
    // Read the file ".env"  
    dotenv.config();

    const api = express();
    api.use(cors());
    api.use(express.json());

    api.locals.controllerModuleHandler = controllerModuleHandler

    // Attach to React frontend
    api.use(express.static(path.join(__dirname, 'client/build')));

    // Root path
    api.get('/api/', (_, response) =>
    {
        response.send({ message: 'Wellcome to pokemondex', });
    });

    const imageDirectory = controllerModuleHandler.storageModule.resolveDirectory(controllerModuleHandler.storageModule.pathPokemons)
    // Images endpoint
    api.use('/images', express.static(imageDirectory));


    // Main app routes
    api.use('/api/', routes);

    // Port definition and API initializing  
    const APP_PORT = process.env.PORT || 3001;
    api.listen(APP_PORT, () =>
    {
        console.log(`Microservice initialized at port ${APP_PORT}`);
    });

}

module.exports = apiModule
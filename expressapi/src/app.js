// Simple example of machine learning, image classification

const apiModule = require('./apiModule/apiModule')
const controllerModule = require('./controllerModule/controllerInterface')

const application = {}

application.initialize = async () =>
{
    //await imageClassifier.initialize(storageModule.pathTrainData, storageModule.pathTrainedModel)
    await apiModule.initialize(controllerModule)
}

application.initialize()
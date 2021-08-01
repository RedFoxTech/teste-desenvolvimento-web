/**
 * @fileoverview Faz com que o console seja limpo em cada atualização feita
 * em um arquivo do react para não poluir visualmente
 * @module packages/frontend/Webpack5/Utilities/ClearConsoleOnHotModuleReplacement 
 */ 

if (IS_DEV_SERVER) {
    if (module.hot) {
        module.hot.accept();
        module.hot.addStatusHandler((status) => {
            if (status === 'prepare') {
                console.clear();
            }
        });
    }
}

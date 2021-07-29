import App from './App';
import {config} from 'dotenv';

/**
 * @fileoverview ponto de entrada pra executar o backend do teste-pokémon-excel
 * implementa o dotenv e integra com a classe App
 * @module packages/backend
 * @throws {Error} Nesse caso a aplicação nem inicia
 * @author wh1t3h47 <tom.mharres@gmail.com>
 * @see {@link mailto:tom.mharres@gmail.com}
 * @see {@link packages/backend/express/App}
 * @see {@link https://www.npmjs.com/package/dotenv}
 * @requires App
 * @requires dotenv
 * @copyright wh1t3h47 - All Wrongs Reserved
 * @version 1.0.0
 */


(function () {
/** Carrega .env em process.env */
config();

/** Carrega PORT do .env ou 8888 */

const {PORT = 31337} = process.env;
const port = (typeof PORT === 'number')? PORT: parseInt(PORT, 10);

const app = new App().app;

if (!app) {
  throw new Error('Erro: Falhou ao inicializar o backend, tente rodar um `yarn install`');
}

app.listen(port, () => {
  console.log('Servidor iniciado na porta ' + String(PORT));
});
})();


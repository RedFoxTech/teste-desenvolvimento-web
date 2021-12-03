import Axios, { AxiosInstance } from "axios";

/**
 * @filedescription implementa uma fábrica de API do Axios para que possam
 * ser feitas requisições. Essa API não possui caching, e geralmente ela
 * executa as requisições logo depois da ApiWithCache para manter os dados
 * sempre frescos, mas criar a "ilusão" de carregamento instantâneo.
 * @module packages/frontend/Services/Api
 * @see {@link module:packages/frontend/Services/ApiWithCache}
 * @version 0.0.1
 * @since 07/08/2021
 */


const baseConfig = {
    baseURL: 'https://pokedex-redfox.herokuapp.com/',
    withCredentials: false,
};

const ApiFactory = (): {api: AxiosInstance} => ({
    api: Axios.create({
        ...baseConfig,
    }),
});

export default ApiFactory;

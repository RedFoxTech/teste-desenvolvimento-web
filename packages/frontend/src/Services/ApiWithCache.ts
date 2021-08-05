import Axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance
} from 'axios';
import { setupCache } from 'axios-cache-adapter';
import localforage from 'localforage';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

/**
 * @filedescription implementa o cache do Axios utilizando axios-cache-adapter
 * e localforage para armazenar o cache
 * @module packages/frontend/Services/ApiWithCache
 * @version 0.0.1
 * @since 05/08/2021
 */

const baseConfig = {
    baseURL: 'http://localhost:31337',
    withCredentials: true,
};

const CACHE_MAX_AGE = 5 * 60 * 60 * 1000;

// Extraindo 'axios-cache-adapter/src/exclude' porque se importar, o
// webpack não compila.
function Exclude(
    req: AxiosRequestConfig,
    config: AxiosRequestConfig["cache"] = {
        exclude: [],
    }
) {
    const {
        exclude = {
            filter: null,
            query: null,
            paths: [],

        }
    } = config as {
        exclude: {
            paths: Array<unknown>,
            filter: (p: unknown) => boolean,
            query: unknown,
        }
    };
    const _debug = config.debug as (msg: string) => void;

    // file deepcode ignore ArrayMethodOnNonArray: <Se tem filter, é array>
    if (typeof exclude.filter === 'function' && exclude.filter(req as never)) {
        _debug(`Excluding request by filter ${req.url}`);

        return true;
    }

    // Não fazer o cache quando temos uma query string no request
    const { url } = req as { url: string };
    const hasQueryParams = url.match(/\?.*$/) || !isEmpty(req.params);

    if (exclude.query && hasQueryParams) {
        _debug(`Excluding request by query ${req.url}`);

        return true;
    }

    const paths = exclude.paths || [];
    const found = req && req.url && find(paths, (regexp: RegExp | string) => (
        req?.url?.match(regexp))
    );

    if (found) {
        _debug(`Excluding request by url match ${req.url}`);

        return true;
    }

    return false;
}

// Cria uma storage local para cache
const cacheStore = localforage.createInstance({ name: 'PokemonApiCache' });

// Define o adaptador de cache
const cacheAdapter = setupCache({
    clearOnStale: true,
    debug: false,
    exclude: {
        filter: (req: AxiosRequestConfig) => req.cache && req.cache.exclude,
    },
    // Gera uma chave única para o request. Vai utilizar a url da requisição
    // e os parametros serializados por padrão. Aceita string|function, como
    // documentado aqui: {String|Function} Generate a unique cache key for
    // the request. Will use request url and serialized params by default.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    key: (req) => (req.cache && req.cache.key) || req.url || '',
    maxAge: CACHE_MAX_AGE,
    store: cacheStore,
});

const getKey = cacheAdapter.config.key;
const { debug } = cacheAdapter.config;

// Fábrica de adaptadores que lida com erras de redes e permite grupos
const myAdapter = (adapter: AxiosRequestConfig["adapter"]) => (
    async (req: AxiosRequestConfig): Promise<AxiosResponse<unknown>> => {
        const isExcluded = Exclude(req, (cacheAdapter).config);
        const key = (typeof getKey === 'function') ? getKey(req) : getKey;

        // Adiciona a chave ao grupo
        if (!isExcluded
            && req.cache
            && (<{ groups: unknown }>req.cache).groups
        ) {
            const groupsCacheKey = '__groups';
            const groupsKeys: Record<string, Array<unknown>> = (
                await cacheStore.getItem(groupsCacheKey)
            ) || {};
            let hasSetAny = false;

            for (const group of (req.cache as {
                groups: Array<string>
            }).groups) {
                if (!(group in groupsKeys)) {
                    groupsKeys[group] = [];
                }
                if (groupsKeys[group].indexOf(key) < 0) {
                    hasSetAny = true;
                    groupsKeys[group].push(key);
                }
            }

            // Aplica as mudanças no cache
            if (hasSetAny) {
                await cacheStore.setItem(groupsCacheKey, groupsKeys);
            }
        }

        let res: AxiosResponse;
        try {
            res = <AxiosResponse> await (adapter as (
                req: AxiosRequestConfig,
            ) => unknown)(req);
        } catch (e) {
            (typeof debug === 'function' && debug('request-failed', req.url));
            if (e.request
                && (req.cache
                    && (<{
                        useOnNetworkError: boolean
                    }>req.cache).useOnNetworkError)
                && !isExcluded
            ) {
                // Imita o comportamento do axios-cache-adapter, mas pega
                // diretamente do localforage (indexed DB)
                res = <AxiosResponse>await cacheStore.getItem(key || '');
                if (res && res.data) {
                    res = res.data;
                    res.config = req;
                    res.request = {
                        networkError: true,
                        fromCache: true,
                    };
                    return res;
                }
            }

            throw e;
        }

        return res;
    });

const ApiFactory = (_key: string): {api: AxiosInstance} => ({
    api: Axios.create({
        ...baseConfig,

        adapter: myAdapter(cacheAdapter.adapter),
        cache: <never>{
            key: () => _key,
            useOnNetworkError: true,
        },
    }),
});

const clearCacheByKey = async (key: string): Promise<void> => {
    console.log(`Clearing cache by key: ${key}`);
    const result = <{ expires: number }>await cacheStore.getItem(key);
    if (result && 'expires' in result) {
        result.expires = 1;
        await cacheStore.setItem(key, result);
    }
};

const clearCacheByGroup = async (group: number): Promise<void> => {
    console.log(`Clearing cache by group: ${group}`);
    const groups: Array<Array<string>> = (
        await cacheStore.getItem('__groups')
    ) || <never>{};
    const keys: Array<string> = groups[group] || [];
    keys.forEach(async (key: string) => {
        await clearCacheByKey(key);
    });
};

const clearCacheByGroups = (
    groups: Array<unknown>
): Promise<void[]> => (
    Promise.all(groups.map(clearCacheByGroup))
);

const purgeCache = async (): Promise<void> => {
    console.log('Clearing all caches');
    await cacheStore.clear();
};

export {
    ApiFactory,
    clearCacheByKey,
    clearCacheByGroup,
    clearCacheByGroups,
    purgeCache,
};

import CRUDWithAllAbstract from './CRUDWithAll';

/**
 * @filedescription Implementa a classe pai de todas os repositórios que
 * possuem uma CRUD completa com métodos que interagem com todos os ítens
 * @version 0.0.1
 * @since 06/08/2021
 * @module packages/backend/repositories/repositoriesWithAll
 */

/**
 * @description Implementa a classe pai de todas os repositórios que possuem
 * uma CRUD básica completa.
 * @abstract
 * @class
 * @name CRUDWithAllPaginationAbstract
 * @extends CRUDWithAllAbstract
 */

abstract class CRUDWithAllPaginationAbstract extends CRUDWithAllAbstract {
    abstract create(data: unknown): Promise<unknown>;
    abstract read(unsafeId: string): Promise<unknown>;
    abstract readAll(): Promise<Array<unknown>>;
    abstract readPages(unsafeId: string): Promise<Array<unknown>>;
    abstract updatePartialProperties(
        unsafeId: string,
        data: unknown
    ):Promise<unknown>;
    abstract updateAllProperties(
        unsafeId: string,
        data: unknown
    ): Promise<unknown>;
    abstract delete(unsafeId: string): Promise<unknown>;
    abstract deleteAll(): Promise<unknown>;
}

export default CRUDWithAllPaginationAbstract;

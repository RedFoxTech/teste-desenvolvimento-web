import CRUDAbstract from './CRUD';

/**
 * @filedescription Implementa a classe pai de todas os repositórios que
 * possuem uma CRUD completa com métodos que interagem com todos os ítens
 * @version 0.0.1
 * @since 31/07/2021
 * @module packages/backend/repositories/repositoriesWithAll
 */

/**
 * @description Implementa a classe pai de todas os repositórios que possuem
 * uma CRUD básica completa.
 * @abstract
 * @class
 * @name CRUDWithAllAbstract
 * @extends CRUDAbstract
 */

abstract class CRUDWithAllAbstract extends CRUDAbstract {
    abstract create(data: unknown): Promise<unknown>;
    abstract read(unsafeId: string): Promise<unknown>;
    abstract readAll(): Promise<Array<unknown>>;
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

export default CRUDWithAllAbstract;

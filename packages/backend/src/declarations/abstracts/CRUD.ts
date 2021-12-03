/**
 * @filedescription Implementa a classe pai de todas os repositórios que
 * possuem uma CRUD completa
 * @version 0.0.2
 * @since 30/07/2021
 * @module packages/backend/repositories
 */

/**
 * @description Implementa a classe pai de todas os repositórios que possuem
 * uma CRUD básica completa.
 * @abstract
 * @class
 * @name CRUDAbstract
 */

abstract class CRUDAbstract {
    abstract create(data: unknown): Promise<unknown>;
    abstract read(unsafeId: string): Promise<unknown>;
    abstract updatePartialProperties(
        unsafeId: string,
        data: unknown
    ):Promise<unknown>;
    abstract updateAllProperties(
        unsafeId: string,
        data: unknown
    ): Promise<unknown>;
    abstract delete(unsafeId: string): Promise<unknown>;
}

export default CRUDAbstract;

/**
 * @filedescription Implementa a classe pai de todas os repositórios que
 * possuem uma CRUD completa
 * @version 0.0.1
 * @since 30/07/2021
 */

/**
 * @description Implementa a classe pai de todas os repositórios que possuem
 * uma CRUD completa.
 * @abstract
 * @class
 * @name AbstractCRUD
 */

abstract class CRUDAbstract {
    abstract create(data: unknown): Promise<unknown>;
    abstract read(unsafeId: string): Promise<unknown>;
    abstract readAll(): Promise<Array<unknown>>;
    abstract updateAll(data: unknown): Promise<unknown>;
    abstract updatePartial(data: unknown): Promise<unknown>;
    abstract delete(unsafeId: string): Promise<unknown>;
}

export default CRUDAbstract;

/**
 * @module packages/backend/types/global/index.d.ts
 * @fileoverview Arquivo utilizado para declarar e tipar variaveis globais
 */

/** Variaveis globais */
declare global {
  /**
   * @namespace NodeJS
   * @description Extensão de namespace para tipar as variveis globais a as
   * do `dotenv` (o arquivo `.env` com segredos do repositorio).
   */
  // eslint-disable-next-line no-unused-vars
  namespace NodeJS {
    /** Utilizamos essa sintaxe porque esse permite usar import nesse arquivo
     */
    export interface ProcessEnv {
      /** URL da base de dados do mongo atlas */
      DATABASE_URI: string;
      /** PORT para servir o express */
      PORT: string | number;
    }
}
}

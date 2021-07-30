import crypto from 'crypto';
import fs from 'fs';

/**
 * @filedescription middleware para assistir mudanças ao arquivo de planilha do Pokémon Go
 * @module packages/backend/middlewares/WatchSpreadSheet
 * @author wh1t3h47 <tom.mharres@gmail.com>
 * @since  29/07/2021
 * @version 0.0.1
 */

/**
 * @description Essa função extrai um hash único para um arquivo que é
 * passado como parâmetro, esse hash tem a uma possibilidade menor de
 * ataque birthday (colisão de hash) do que MD5
 * @param {string} file - Arquivo para ser hasheado
 * @returns {string} - O hash do arquivo
 */
// deepcode ignore InsecureHash: <não usamos o hash pra dados sensíveis>
const getHash = (file: string): string => crypto.createHash('sha1').update(file).digest('hex');

/**
 * @description Essa função lê o arquivo de forma assíncrona e retorna o
 * hash dele.
 * @param {string} file - Arquivo para ser lido
 * @return {Promise<string>} - O hash do arquivo
 */
const readFileAsync = (file: string): Promise<string> => new Promise((resolve, reject) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(getHash(data.toString()));
    }
  });
});

/**
 * @description Essa função recebe o nome de um arquivo e salva o hash desse
 * arquivo em outro arquivo de forma assíncrona.
 * @param {string} fileToHash - Arquivo para ser hasheado
 * @param {string} hashFileName - Nome do arquivo em que o hash será salvo.
 * @return {Promise<void>} - Nada
 */
const writeHashAsync = (fileToHash: string, hashFileName: string): Promise<void> => new Promise((resolve, reject) => {
  fs.writeFile(hashFileName, getHash(fileToHash), (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

/**
 * @description middleware do express que vai ler o hash do arquivo de
 * planilha armazenado em ../../../Pokemon\ Go.xlsx e comparar com o
 * conteúdo do arquivo ../../../Pokemon\ Go.xlsx.hash, caso esse hash
 * seja diferente, ele vai salvar o novo hash em
 * ../../../Pokemon\ Go.xlsx.hash usando await
 * @async
 * @param {object} req - Objeto de requisição
 * @param {object} res - Objeto de resposta
 * @param {function} next - Próximo middleware
 * @return {Promise<void>} - Nada
 */
export default async (req: Express.Request, res: Express.Response, next: Function): Promise<void> => {
  const fileName = '../../../Pokemon\ Go.xlsx';
  const hashFileName = '../../../Pokemon\ Go.xlsx.hash';

  try {
    const hash = await readFileAsync(hashFileName);
    const fileHash = await readFileAsync(fileName);

    if (hash !== fileHash) {
      await writeHashAsync(fileName, hashFileName);
    }
  } catch (e) {
    next(e);
  }
};


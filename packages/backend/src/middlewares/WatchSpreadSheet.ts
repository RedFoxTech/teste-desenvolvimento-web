import crypto from 'crypto';
import fs from 'fs';
import {BinaryLike} from 'crypto';
import {Request, Response, NextFunction} from 'express';
import checkFileExistsAsync from '../services/CheckFileExistsAsync';

/**
 * @filedescription middleware para assistir mudanças ao arquivo de
 * planilha do Pokémon Go
 * @module packages/backend/middlewares/WatchSpreadSheet
 * @author wh1t3h47 <tom.mharres@gmail.com>
 * @see {@link module:packages/backend/services/CheckFileExistsAsync}
 * @see {@link module:packages/backend/services/exportSpreadsheet}
 * @since  29/07/2021
 * @version 0.0.4
 */

/**
 * @description Essa função extrai um hash único para um arquivo que é
 * passado como parâmetro, esse hash tem a uma possibilidade menor de
 * ataque birthday (colisão de hash) do que MD5
 * @param {fs.PathLike} file - Arquivo para ser hasheado
 * @returns {string} - O hash do arquivo
 */

/* globals console __dirname */

const getHash = (file: BinaryLike): string => (
  // file deepcode ignore InsecureHash: <não usamos o hash pra dados sensíveis>
  crypto.createHash('sha1').update(file).digest('hex')
);

/**
 * @description Essa função lê o arquivo de forma assíncrona e retorna o
 * hash dele.
 * @param {fs.PathLike} file - Arquivo para ser lido
 * @return {Promise<string>} - O hash do arquivo
 */
const readFileAsync = (file: fs.PathLike): Promise<string> => (
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(getHash(data.toString()));
      }
    });
  }));

/**
 * @description Essa função recebe o nome de um arquivo e salva o hash desse
 * arquivo em outro arquivo de forma assíncrona.
 * @param {fs.PathLike} fileToHash - Arquivo para ser hasheado
 * @param {string} hashFileName - Nome do arquivo em que o hash será salvo.
 * @return {Promise<void>} - Nada
 */
const writeHashAsync = (
    fileToHash: BinaryLike, hashFileName: string,
): Promise<void> => new Promise((resolve, reject) => {
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
const WatchSpreadSheet = async (
    req: Request, res: Response, next: NextFunction,
): Promise<void> => {
  const fileName: fs.PathLike = `${__dirname}/../../../../Pokemon Go.xlsx`;
  const hashFileName: fs.PathLike = `${
    __dirname}/../../../../Pokemon Go.xlsx.hash`;

  // Checa se o arquivo existe no disco
  if (await checkFileExistsAsync(fileName)) {
    if (!(await checkFileExistsAsync(hashFileName))) {
      // Cria o arquivo de hash
      await writeHashAsync(fileName, hashFileName);
    }
    try {
      const hash = await readFileAsync(hashFileName);
      const fileHash = await readFileAsync(fileName);

      if (hash !== fileHash) {
        await writeHashAsync(fileName, hashFileName);
      }
    } catch (e) {
      next(e);
    }
  } else {
    console.error('Arquivo de spreadsheet não existe.');
  }
};

export default WatchSpreadSheet;

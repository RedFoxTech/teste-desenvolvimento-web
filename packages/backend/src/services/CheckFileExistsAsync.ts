import fs from 'fs';
/**
 * @fileoverview Implementa uma função que verifica se um arquivo existe
 * de forma assíncrona.
 * @module packages/backend/services/CheckFileExistsAsync
 * @requires fs
 * @version 0.0.1
 * @since 01/08/2021
*/

/**
 * @param {fs.PathLike} filePath - Caminho do arquivo.
 * @function CheckFileExistsAsync
 * @return {Promise<boolean>} true caso o arquivo exista
 * e valor falseável caso contrário.
 */
function checkFileExistsAsync(
    filePath: fs.PathLike,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(true);
    });
  });
}

export default checkFileExistsAsync;

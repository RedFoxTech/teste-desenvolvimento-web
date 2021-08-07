/**
 * @filedescription Faz o import de todos os assets de pokémons para que possamos
 * usar as imagens dinâmicamente sem ter conhecimento de como elas estão organizadas.
 * Esse arquivo apenas precisa ser importado para ser executado, quando importado,
 * retorna um objeto com os mapeamentos dos imports
 * @example console.log(await import('./ImportAllPokemonSprites'));
 * // {'./1.png': 'localhost:1337/dashudhsua.png', ...}
 * @module packages/frontend/Services/ImportAllPokemonSprites
 * @version 0.0.1
 * @since 06/08/2021
 */

type WebpackContextType = {
    keys(): string[];
    values(): string[];
}

type WebpackRequireType = {
  context: (
    path: string,
    recursive: boolean,
    fileMatch: RegExp
  ) => WebpackContextType,
}

const importAllPokemonSprites = (): Record<string, string> => {

    const mapFiles = (context: WebpackContextType) => {
      const keys = context.keys();
      const values = keys.map(<never>context);
      return keys.reduce((accumulator, key, index) => ({
        ...accumulator,
        [key]: values[index],
      }), {});
    }

  const allImages = mapFiles((<WebpackRequireType>require).context(
    'pokemon-sprites/sprites/pokemon/other/official-artwork/',
    true,
    /\.(png|gif|ico|jpg|jpeg)$/i
  ));
  // console.log(allImages);
  return allImages
}

export default importAllPokemonSprites();

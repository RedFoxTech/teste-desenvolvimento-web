import Pokemon from '../../../../shared/declarations/interfaces/Pokemon';

interface PokemonCardProps {
    pokemon: Pokemon;
    imgSrc?: string;
    /** true caso a imgSrc seja um caminho dentro de node_modules*/
    imgImport?: boolean;
    // Não utilizada por enquanto
    description?: string;
    /** Uma promise que vai resolver para o mapa de sprites
     * @see {@link module:packages/frontend/Services/ImportAllPokemonSprites}
     */
    importSpritesPromise?: Promise<Record<string, unknown>>;
}

export default PokemonCardProps;

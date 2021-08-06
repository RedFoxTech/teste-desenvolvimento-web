import Pokemon from '../../../../shared/declarations/interfaces/Pokemon';

interface PokemonCardProps {
    pokemon: Pokemon;
    imgSrc?: string;
    /** true caso a imgSrc seja um caminho dentro de node_modules*/
    imgImport?: boolean;
    // Não utilizada por enquanto
    description?: string;
}

export default PokemonCardProps;

export const getColorHexFromType = ( type: string ) => {
    if(!type || type === "") {
        return "#000";
    }

    const Types = {
        bug: '#A6B91A',
        dark: '#705746',
        dragon: '#6F35FC',
        electric: '#F7D02C',
        fairy: '#D685AD',
        fighting: '#C22E28',
        fire: '#EE8130',
        flying: '#A98FF3',
        ghost: '#735797',
        grass: '#7AC74C',
        ground: '#E2BF65',
        ice: '#96D9D6',
        normal: '#A8A77A',
        poison: '#A33EA1',
        psychic: '#F95587',
        rock: '#B6A136',
        steel: '#B7B7CE',
        water: '#6390F0',
    }

    return Types[type as keyof typeof Types];
}
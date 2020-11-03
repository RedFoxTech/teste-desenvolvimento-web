const GenerationsString = [
    'Kanto',
    'Johto',
    'Hoenn',
    'Sinnoh',
    'Unova',
    'Kalos',
    'Alola',
    'Galar',
]

export const GenerationsENUM = {
    'Kanto':1,
    'Johto':2,
    'Hoenn':3,
    'Sinnoh':4,
    'Unova':5,
    'Kalos':6,
    'Alola':7,
    'Galar':8,
}

export function getGenerationsNum (generationsString){
    const generations = generationsString.map(val => {
        return GenerationsENUM[val]
    })
    return generations
}

export { GenerationsString }
export default GenerationsString
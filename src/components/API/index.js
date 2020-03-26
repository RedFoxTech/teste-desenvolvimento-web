
export const getAllPokes = () => fetch('http://localhost:8088/getall')
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));

export const filterPokesByTypeOne = (typeOne) => fetch(`http://localhost:8088/${typeOne}`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));
    
export const filterByName = (Name) => fetch(`http://localhost:8088/pokemon/${Name}`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));
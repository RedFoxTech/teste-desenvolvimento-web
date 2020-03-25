export const getAllPokes = () => fetch('http://localhost/getall')
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));

export const filterPokesByTypeOne = (typeOne) => fetch(`http://localhost/${typeOne}`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));
    
export const filterByName = (Name) => fetch(`http://localhost/pokemon/${Name}`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));
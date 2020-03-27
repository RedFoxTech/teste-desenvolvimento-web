const url = "https://oseiasnascimento.herokuapp.com"

export const getAllPokes = () => fetch(`${url}/getall`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));

export const filterPokesByTypeOne = (typeOne) => fetch(`${url}/${typeOne}`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));
    
export const filterByName = (Name) => fetch(`${url}/pokemon/${Name}`)
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => console.log(e));
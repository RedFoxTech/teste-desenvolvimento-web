export const getAllPokes = () => fetch('http://localhost/getall')
    .then(response => response.json())
    .then((dados) => dados)
    .catch((e) => alert(e))
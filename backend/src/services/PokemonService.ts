import {database} from '../database'

export async function GetAllPokemons(){
    const arrayPokemons = []

    const dbRef = await database.ref();
    await dbRef.child("pokemons").get().then((snapshot) => {
      if (snapshot.exists()) {
        arrayPokemons.push(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    return arrayPokemons
}
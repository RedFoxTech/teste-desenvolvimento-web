import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import axios from 'axios'


const CreatePokemon = () => {

    const {form, onChange, resetForm} = useForm({
        name: "", 
        image: "",
        atack: "",
        defense: "",
        stat: "",
        types: []
    })
    
    const [chooseTypes, setChooseTypes] = useState("")


   const listTypes = [
        "BUG",
        "DARK",
        "DRAGON",
        "ELETRIC",
        "FAIRY",
        "FIGHTING",
        "FIRE",
        "FLYING",
        "GHOST", 
        "GRASS", 
        "GROUND", 
        "ICE", 
        "NORMAL", 
        "POISON", 
        "PSYCHIC", 
        "ROCK", 
        "STEEL", 
        "WATER"
    ] 

    console.log(form)


    const addPokemons = (event) => {
        event.preventDefault()
        

        const body = {
            name: form.name, 
            image: form.image,
            atack: form.atack,
            defense: form.defense,
            stat: form.stat,
            types: form.types,
            
        }

        axios.post("https://gopokemon.herokuapp.com/pokemon/create", body)
            .then(()=>{
                alert("Pokemon successfully created")
            }).catch((error)=>{
                alert("Oops! Something went wrong ", error.message )
                
            })

            resetForm()
    }
    
    return(
        <div>
            <form onSubmit={addPokemons}>
               <input 
                    placeholder="pokemon name"
                    type = "text"
                    name="name"
                    value= {form.name} 
                    onChange={onChange}                   
               />
               <input 
                    placeholder="url (image pokemon)"
                    type= "url"
                    name="image"
                    value={form.image} 
                    onChange={onChange}                 
               />
               <input 
                    placeholder="Attack"
                    type="text"
                    name="atack"
                    value={form.atack}
                    onChange={onChange}   
               />
               <input
                    placeholder="Defense"
                    type="text"
                    name="defense"
                    value={form.defense}
                    onChange={onChange}   
               />
               <input 
                    placeholder="Stat"
                    type="text"
                    name="stat"
                    value={form.stat}
                    onChange={onChange}   
               />
              <select
                name="types"
                value={form.types}
                onChange={onChange}              
              >
              {
                 listTypes.map((item)=>{
                     return(
                         <option>{item}</option>
           
                     )
                 })
             }
              </select>    
               <button>Create</button>
            </form>
        </div>
    )
}

export default CreatePokemon
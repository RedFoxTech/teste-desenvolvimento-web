import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {useHistory, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import api from '../../service/api'
import SaveForm from './SaveForm'

export default function Save() {

  const [state, setState] = useState({
    name:'',
    pokedexNumber:'',
    generation: '',
    evolutionStage: '',
    familyId:'',
    crossGen: false,
    type1: 'normal',
    type2: '',
    weather1: 'Sunny/Clear',
    weather2: '',
    statTotal: '',
    atk: '',
    def: '',
    sta: '',
    legendary: false,
    aquireable: false,
    spawns: false,
    regional: false,
    raidable: '',
    hatchable: '',
    shiny: false,
    nest: false,
    new: false,
    notGettable: false,
    futureEvolve: false,
    cp_100_lvl40: '',
    cp_100_lvl39: '',
    imgUrl: null
  })

  
  const [file, setFile] = useState(null)
  const history = useHistory()
  const {id} = useParams();

  useEffect(() => {

    (async function(){
        if (id !== undefined) {
          const pokemonData = await api.get(`/pokemons?id=${id}`);
          setState(pokemonData.data)
        }
    })()
  }, [id])

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const pokemonParams = Object.entries(state)
    const form = new FormData()

    pokemonParams.forEach((param) => {
      form.set(param[0], param[1])
    })

    if(file)
      form.append('img',file)

    if(state.evolutionStage > 1 ||  state.evolutionStage.trim().toLowerCase()==='Evolved')
      form.set('evolved', 'true')
    else
      form.set('evolved', 'false')
    
      
    try{
      if(id === undefined){
        await api.post('/pokemons', form)
        history.push('/')
        toast.success('Pokémon cadastrado com sucesso')
      }else{
        await api.put(`/pokemons/${id}`, form)
        history.push('/')
        toast.success('Pokémon editado com sucesso')
      }
     
    }catch(e){
      if(e.response.data.message){
        toast.error(e.response.data.message)
      }
    }

  }

  return (
    <Container>
      <Row>
        <Col md={12} className='m-auto'>
          <h1 className="h1 text-center mt-2">{!id ? 'Register Pokemon' : 'Update Pokemon'}</h1>
          <SaveForm handleSubmit={handleSubmit} setFile={setFile} setState={setState} state={state}></SaveForm>
        </Col>
      </Row>
    </Container>
  )
}

import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useHistory, useLocation } from "react-router-dom";

import ContainerComponent from "../../components/Container";
import TitleSecondary from "../../components/TitleSecondary";

import API from "../../services/api";
import useTokenStore from "../../hooks/useTokenStore";
import InputCreatePokemon from "../../components/FormCreatePokemon/Input";
import FormCreatePokemon from "../../components/FormCreatePokemon";
import ButtonCreatePokemon from "../../components/FormCreatePokemon/Button";
import GoBackDashBoardHeader from "../../components/GoBackDashBoardHeader";
import { validatePokemonData } from "../../utils/isValidData";

function DashBoardUpdatePokemon() {
  const location = useLocation();
  const history = useHistory();

  const { getUserToken } = useTokenStore();

  const [ pokemonId, setPokemonId  ] = useState(null);
  const [ pokemonName, setPokemonName ] = useState('');
  const [ typeOne, setTypeOne ] = useState('');
  const [ typeTwo, setTypeTwo ] = useState('');
  const [ weatherOne, setWeatherOne ] = useState('');
  const [ weatherTwo, setWeatherTwo ] = useState('');
  const [ generation, setGeneration ] = useState(null);
  const [ evolutionStage, setEvolutionStage ] = useState(null);
  const [ atk, setAtk ] = useState(null);
  const [ def, setDef ] = useState(null);
  const [ stat, setStat ] = useState(null);

  const [ defaultData, setDefaultData ] = useState({});

  useEffect(() => {  
    (async () => {
      if (!location.state) {
        history.push('/dashboard');
        return;
      } else {
        setPokemonId(location.state.id);
        setPokemonName(location.state.name);
        await getPokemonData();
      }
    })()
  }, []);
  
  const token = getUserToken();

  function deleteNotUsedData(data, keys) {
    keys.forEach(key => delete data[key]);
    return data;
  }

 async function getPokemonData() {
    const { data } = await API.get(`/session/pokemon/${pokemonId}`, 
    { headers: { Authorization: `Bearer ${token}`}});

    const result = data.pokemon[0];

    const notUsedData = [ 
      'type_one', 'type_two', 'weather_one', 
      'weather_two', 'generation', 'evolution_stage', 
      'atk', 'def', 'stat', 'image_name'
    ];

    const newData = deleteNotUsedData(result, notUsedData);
    setDefaultData(newData);
  }

  async function handleUpdateImage() {
    const data = {
      typeOne, typeTwo, atk, evolutionStage, def, 
      stat, weatherOne, generation, weatherTwo,
      ...defaultData,
    };

    const priorityValues = [ typeOne, typeTwo, atk, evolutionStage, def, stat, weatherOne, generation, weatherTwo];
    
    if (validatePokemonData(priorityValues)) {
      try {    
        const response = await API.put(`session/update/${pokemonId}`, data,
          { headers: { Authorization: `Bearer ${token}`}});

        if (response.status === 200) {
          toast.success('Pokemon atualizado com sucess');
        }
      } catch(err) {
        toast.info('Houve um erro inesperado na atualização, tente novamente.');
      }
    }
  }

  return (
    <>
    <GoBackDashBoardHeader/>
    <Box bgcolor="dark.main" minHeight="100vh" display="flex" flexDirection="column" justifyContent='center' alignItems='center'>    
      <ContainerComponent>
        <TitleSecondary label={`Atualizar o ${pokemonName}`}/>

        <Box display="flex" justifyContent='center' alignItems='center' minHeight="100%">
          <FormCreatePokemon>
            <InputCreatePokemon id="generation" label="Generation" type="number" name="generation" value={generation} onChange={(e) => setGeneration(e.target.value)}/>
            <InputCreatePokemon id="evolutionStage" label="Evolution Stage" type="number" name="evolutionStage" value={evolutionStage} onChange={(e) => setEvolutionStage(e.target.value)}/>
            <InputCreatePokemon id="atk" label="Atk" type="number" name="atk" value={atk} onChange={(e) => setAtk(e.target.value)}/>
            <InputCreatePokemon id="def" label="Def" type="number" name="def" value={def} onChange={(e) => setDef(e.target.value)}/>      
            <InputCreatePokemon id="stat" label="Stat" type="number" name="stat" value={stat} onChange={(e) => setStat(e.target.value)}/>
            <InputCreatePokemon id="typeOne" label="Type One" type="text" name="typeOne" value={typeOne} onChange={(e) => setTypeOne(e.target.value)}/>
            <InputCreatePokemon id="typeTwo" label="Type Two" type="text" name="typeTwo" value={typeTwo} onChange={(e) => setTypeTwo(e.target.value)}/>
            <InputCreatePokemon id="weatherOne" label="Weather One" type="text" name="weatherOne" value={weatherOne} onChange={(e) => setWeatherOne(e.target.value)}/>
            <InputCreatePokemon id="weatherTwo" label="Weather Two" type="text" name="weatherTwo" value={weatherTwo} onChange={(e) => setWeatherTwo(e.target.value)}/>        
            <ButtonCreatePokemon label="Atualizar" onClick={handleUpdateImage}/>
          </FormCreatePokemon>
        </Box>

      </ContainerComponent>
    </Box>
    </>
  )
}

export default DashBoardUpdatePokemon;
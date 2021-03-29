import { Box, Grid } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import ContainerComponent from "../../components/Container";
import FormCreatePokemon from "../../components/FormCreatePokemon";
import ButtonCreatePokemon from "../../components/FormCreatePokemon/Button";
import InputCreatePokemon from "../../components/FormCreatePokemon/Input";
import RadioCreatePokemon from "../../components/FormCreatePokemon/Radio";
import GoBackDashBoardHeader from "../../components/GoBackDashBoardHeader";
import TitleSecondary from "../../components/TitleSecondary";
import useTokenStore from "../../hooks/useTokenStore";
import API from "../../services/api";
import handlerFile from "../../utils/handlerFile";
import { validatePokemonData } from "../../utils/isValidData";
import useStyles from "./styles";

function DashBoardCreatePokemon() {
  const history = useHistory();

  // string
  const [ image, setImage ] = useState(null);
  const [ name, setName ] = useState('');
  const [ typeOne, setTypeOne ] = useState('');
  const [ typeTwo, setTypeTwo ] = useState('');
  const [ weatherOne, setWeatherOne ] = useState('');
  const [ weatherTwo, setWeatherTwo ] = useState('');
  // number
  const [ generation, setGeneration ] = useState(null);
  const [ evolutionStage, setEvolutionStage ] = useState(null);
  const [ familyId, setFamilyId ] = useState(null);
  const [ atk, setAtk ] = useState(null);
  const [ def, setDef ] = useState(null);
  const [ stat, setStat ] = useState(null);
  const [ raidable, setRaidable ] = useState(null);
  const [ hatchable, setHatchable ] = useState(null);
  // booleans
  const [ evolved, setEvolved ] = useState(true);
  const [ crossGender, setCrossGender ] = useState(true);
  const [ lengendary, setLengendary ] = useState(true);
  const [ acquirable, setAcquirable ] = useState(true);
  const [ spawns, setSpawns ] = useState(true);
  const [ regional, setRegional ] = useState(true);
  const [ shiny, setShiny ] = useState(true);
  const [ nest, setNest ] = useState(true);
  const [ newField, setNewField ] = useState(true);
  const [ notGettable, setNotGettable ] = useState(true);
  const [ futureEvolve, setFutureEvolve ] = useState(true);
 
  const classes = useStyles();

  const { getUserToken } = useTokenStore();
  const token = getUserToken();

  async function handlerCreatePokemon() {
    const data = new FormData();

    data.append('image', image);
    data.append('name', name);
    data.append('typeOne', typeOne);
    data.append('typeTwo', typeTwo);
    data.append('weatherOne', weatherOne);
    data.append('weatherTwo', weatherTwo);
    data.append('generation', generation);
    data.append('evolutionStage', evolutionStage);
    data.append('familyId', familyId);
    data.append('atk', atk);
    data.append('def', def);
    data.append('stat', stat);
    data.append('raidable', raidable);
    data.append('hatchable', hatchable);

    data.append('evolved', evolved);
    data.append('crossGender', crossGender);
    data.append('lengendary', lengendary);
    data.append('acquirable', acquirable);
    data.append('spawns', spawns);
    data.append('nest', nest);
    data.append('shiny', shiny);
    data.append('regional', regional);
    data.append('newField', newField);
    data.append('notGettable', notGettable);
    data.append('futureEvolve', futureEvolve);

    const priorityValues = [name, atk, evolutionStage, familyId, def, stat, raidable, hatchable, generation];
    
    if (validatePokemonData(priorityValues)) {
      try {    
        const response = await API.post('/session/store', data,
          { headers: { Authorization: `Bearer ${token}`, 
          'content-type': 'multipart/form-data' }});

        if (response.status === 201) {
          toast.success('Pokemon criado com sucess');
          history.push('/dashboard');
        }
      } catch(err) {
        toast.info('Pokemon com este nome já existe!');
      }
    }
  }

  function handlerImage(e) {
    setImage(e.target.files[0]);
    handlerFile(e, '#imageFile');
  }

  return (
    <>
      <GoBackDashBoardHeader />
      <Box bgcolor="dark.main" minHeight="100vh" py="3rem" display="flex" flexDirection="column" justifyContent='center' alignItems='center'>
        <ContainerComponent>
          <TitleSecondary label="Adicione seu pokemon!"/>

          <Box display="flex" justifyContent='center' alignItems='center' minHeight="100%">
              <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormCreatePokemon>
                  <InputCreatePokemon id="name" label="Nome" type="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                  <InputCreatePokemon id="typeOne" label="Type One" type="text" name="typeOne" value={typeOne} onChange={(e) => setTypeOne(e.target.value)}/>
                  <InputCreatePokemon id="typeTwo" label="Type Two" type="text" name="typeTwo" value={typeTwo} onChange={(e) => setTypeTwo(e.target.value)}/>
                  <InputCreatePokemon id="weatherOne" label="Weather One" type="text" name="weatherOne" value={weatherOne} onChange={(e) => setWeatherOne(e.target.value)}/>
                  <InputCreatePokemon id="weatherTwo" label="Weather Two" type="text" name="weatherTwo" value={weatherTwo} onChange={(e) => setWeatherTwo(e.target.value)}/>        
                  
                </FormCreatePokemon>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormCreatePokemon>
                  <InputCreatePokemon id="generation" label="Generation" type="number" name="generation" value={generation} onChange={(e) => setGeneration(e.target.value)}/>
                  <InputCreatePokemon id="evolutionStage" label="Evolution Stage" type="number" name="evolutionStage" value={evolutionStage} onChange={(e) => setEvolutionStage(e.target.value)}/>
                  <InputCreatePokemon id="familyId" label="Family Id" type="number" name="familyId" value={familyId} onChange={(e) => setFamilyId(e.target.value)}/>
                  <InputCreatePokemon id="atk" label="Atk" type="number" name="atk" value={atk} onChange={(e) => setAtk(e.target.value)}/>
                  <InputCreatePokemon id="def" label="Def" type="number" name="def" value={def} onChange={(e) => setDef(e.target.value)}/>      
                </FormCreatePokemon>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormCreatePokemon>
                  <InputCreatePokemon id="stat" label="Stat" type="number" name="stat" value={stat} onChange={(e) => setStat(e.target.value)}/>
                  <InputCreatePokemon id="raidable" label="Raidable" type="number" name="raidable" value={raidable} onChange={(e) => setRaidable(e.target.value)}/>
                  <InputCreatePokemon id="hatchable" label="Hatchable" type="number" name="hatchable" value={hatchable} onChange={(e) => setHatchable(e.target.value)}/>
                  <InputCreatePokemon isFile={true} id="image" label="Imagem" type="file" name="image" onChange={handlerImage}/>
                  <RadioCreatePokemon label="Evolved" value={evolved} onChange={(e) => setEvolved(!evolved)} ariaLabel="evolved" name="evolved"/>
                </FormCreatePokemon>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormCreatePokemon>
                  <RadioCreatePokemon label="CrossGender" value={crossGender} onChange={(e) => setCrossGender(!crossGender)} ariaLabel="crossGender" name="crossGender"/>
                  <RadioCreatePokemon label="Lengendary" value={lengendary} onChange={(e) => setLengendary(!lengendary)} ariaLabel="lengendary" name="lengendary"/>
                  <RadioCreatePokemon label="Acquirable" value={acquirable} onChange={(e) => setAcquirable(!acquirable)} ariaLabel="acquirable" name="acquirable"/>
                </FormCreatePokemon>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormCreatePokemon>
                  <RadioCreatePokemon label="Shiny" value={shiny} onChange={(e) => setShiny(!shiny)} ariaLabel="shiny" name="shiny"/>
                  <RadioCreatePokemon label="Nest" value={nest} onChange={(e) => setNest(!nest)} ariaLabel="nest" name="nest"/>
                  <RadioCreatePokemon label="New Field" value={newField} onChange={(e) => setNewField(!newField)} ariaLabel="newField" name="newField"/>
                  <RadioCreatePokemon label="Not Gettable" value={notGettable} onChange={(e) => setNotGettable(!notGettable)} ariaLabel="notGettable" name="notGettable"/>
                  </FormCreatePokemon>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormCreatePokemon >
                <RadioCreatePokemon label="Spawns" value={spawns} onChange={(e) => setSpawns(!spawns)} ariaLabel="spawns" name="spawns"/>
                  <RadioCreatePokemon label="Regional" value={regional} onChange={(e) => setRegional(!regional)} ariaLabel="regional" name="regional"/>
                  <RadioCreatePokemon label="Future Evolve" value={futureEvolve} onChange={(e) => setFutureEvolve(!futureEvolve)} ariaLabel="futureEvolve" name="futureEvolve"/>
                  <ButtonCreatePokemon label="Cadastrar" onClick={handlerCreatePokemon}/>
                </FormCreatePokemon>
                </Grid>
              </Grid>
            </div>
          </Box>
        </ContainerComponent>
      </Box>
    </>
  )
}

export default DashBoardCreatePokemon;
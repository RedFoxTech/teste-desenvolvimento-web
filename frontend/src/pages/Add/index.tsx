import {
  useState
}from 'react';

import {
  useHistory
} from "react-router-dom";

import{
  Container,
  Row,
  Column
}from '../../global/styles';

import {
  Main,
  SectionPokemons,
  ButtonGoBack,
  Title,
  ColumnPokemon,
  Form,
  Label,
  Input,
  Select,
  Option,
  Center,
  ButtonAdd
} from './style';

import {
  Header
}from '../../components/Header';

import {
  Footer
}from '../../components/Footer';

import {
  api
} from '../../services/api';

import swal from 'sweetalert';

import {
  onlyNumbers
} from '../../utils/inputMask';

import { 
  Ring 
} from 'react-spinners-css';

function Add(){
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [pokedex_number, setPokedex_number] = useState('');
  const [img_name, setImg_name] = useState('');
  const [generation, setGeneration] = useState('');
  const [evolution_stage, setEvolution_stage] = useState('');
  const [evolved, setEvolved] = useState('');
  const [family_id, setFamily_id] = useState('');
  const [cross_gen, setCross_gen] = useState('');
  const [type_one, setType_one] = useState('');
  const [type_two, setType_two] = useState('');
  const [weather_one, setWeather_one] = useState('');
  const [weather_two, setWeather_two] = useState('');
  const [stat_total, setStat_total] = useState('');
  const [atk, setAtk] = useState('');
  const [def, setDef] = useState('');
  const [sta, setSta] = useState('');
  const [legendary, setLegendary] = useState('');
  const [aquireable, setAquireable] = useState('');
  const [spawns, setSpawns] = useState('');
  const [regional, setRegional] = useState('');
  const [raidable, setRaidable] = useState('');
  const [hatchable, setHatchable] = useState('');
  const [shiny, setShiny] = useState('');
  const [nest, setNest] = useState('');
  const [is_new, setIs_new] = useState('');
  const [not_gettable, setNot_gettable] = useState('');
  const [future_evolve, setFuture_evolve] = useState('');
  const [cp_100_40, setCp_100_40] = useState('');
  const [cp_100_39, setCp_100_39] = useState('');

  function addPokemon(e: any){
    e.preventDefault();
    if(!name){
      swal("Nome", "Enter the name to continue!", "warning");
    }
    else if(!img_name){
      swal("Img Name", "Enter the img name to continue!", "warning");
    }
    else if(!evolution_stage){
      swal("Evolution Stage", "Enter the evolution stage to continue!", "warning");
    }
    else if(!type_one){
      swal("Type 1", "Enter the type 1 to continue!", "warning");
    }
    else if(!type_two){
      swal("Type 2", "Enter the type 2 to continue!", "warning");
    }
    else if(!weather_one){
      swal("Weather 1", "Enter the weather 1 to continue!", "warning");
    }
    else if(!weather_two){
      swal("Weather 2", "Enter the weather 2 to continue!", "warning");
    }
    else{
      setLoading(true);
      api.post('/pokemons', {
        name, 
        pokedex_number: parseInt(pokedex_number ? pokedex_number: '0'),
        img_name,
        generation: parseInt(generation ? generation : '0'),
        evolution_stage,
        evolved: parseInt(evolved ? evolved : '0'),
        family_id: parseInt(family_id ? family_id : '0'),
        cross_gen: parseInt(cross_gen ? cross_gen : '0'),
        type_one,
        type_two,
        weather_one,
        weather_two,
        stat_total: parseInt(stat_total ? stat_total : '0'),
        atk: parseInt(atk ? atk : '0'),
        def: parseInt(def ? def : '0'),
        sta: parseInt(sta ? sta : '0'),
        legendary: parseInt(legendary ? legendary : '0'),
        aquireable: parseInt(aquireable ? aquireable : '0'),
        spawns: parseInt(spawns ? spawns : '0'),
        regional: parseInt(regional ? regional : '0'),
        raidable: parseInt(raidable ? raidable : '0'),
        hatchable: parseInt(hatchable ? hatchable : '0'),
        shiny: parseInt(shiny ? shiny : '0'),
        nest: parseInt(nest ? nest : '0'),
        is_new: parseInt(is_new ? is_new : '0'),
        not_gettable: parseInt(not_gettable ? not_gettable : '0'),
        future_evolve: parseInt(future_evolve ? future_evolve : '0'),
        cp_100_40: parseInt(cp_100_40 ? cp_100_40 : '0'),
        cp_100_39: parseInt(cp_100_39 ? cp_100_39 : '0')
      }).then(response => {
        setLoading(false);
        swal(`Prontinho! ${response.data.success}`, {
          icon: "success",
        }).then(()=>{
          history.push('/');
        })
      }, error => {
        swal ( "Ops!" ,  error.response.data.error ,  "error");
      })
    }
  }

  return (
    <>
      <Header/>
      <Main>
        <SectionPokemons>
          <Container>
            <Row>
              <Column>
                <ButtonGoBack
                  onClick={()=>history.goBack()}
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Title>
                  Add Pokémon
                </Title>
              </Column>
            </Row>
            <Form
              onSubmit={addPokemon}
            >
              <Row>
                <ColumnPokemon>
                  <Label>
                    Name
                  </Label>
                  <Input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Pokédex Number
                  </Label>
                  <Input
                    value={pokedex_number}
                    onChange={(event) => setPokedex_number(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Img Name
                  </Label>
                  <Input
                    value={img_name}
                    onChange={(event) => setImg_name(event.target.value)}
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Generation
                  </Label>
                  <Input
                    value={generation}
                    onChange={(event) => setGeneration(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    Evolution Stage
                  </Label>
                  <Input
                    value={evolution_stage}
                    onChange={(event) => setEvolution_stage(onlyNumbers(event.target.value))}
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Evolved
                  </Label>
                  <Input
                    value={evolved}
                    onChange={(event) => setEvolved(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Family ID
                  </Label>
                  <Input
                    value={family_id}
                    onChange={(event) => setFamily_id(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Cross Gen
                  </Label>
                  <Input
                    value={cross_gen}
                    onChange={(event) => setCross_gen(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    Type 1
                  </Label>
                  <Select
                    value={type_one}
                    onChange={(event) => setType_one(event.target.value)}
                  >
                    <Option value="">Select Type</Option>
                    <Option value="grass">grass</Option>
                    <Option value="fire">fire</Option>
                    <Option value="water">water</Option>
                    <Option value="bug">bug</Option>
                    <Option value="normal">normal</Option>
                    <Option value="poison">poison</Option>
                    <Option value="electric">electric</Option>
                    <Option value="ground">ground</Option>
                    <Option value="fairy">fairy</Option>
                    <Option value="fighting">fighting</Option>
                    <Option value="psychic">psychic</Option>
                    <Option value="rock">rock</Option>
                    <Option value="ghost">ghost</Option>
                    <Option value="ice">ice</Option>
                    <Option value="dragon">dragon</Option>
                    <Option value="dark">dark</Option>
                    <Option value="steel">steel</Option>
                  </Select>
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Type 2
                  </Label>
                  <Select
                    value={type_two}
                    onChange={(event) => setType_two(event.target.value)}
                  >
                    <Option value="">Select Type</Option>
                    <Option value="grass">grass</Option>
                    <Option value="fire">fire</Option>
                    <Option value="water">water</Option>
                    <Option value="bug">bug</Option>
                    <Option value="normal">normal</Option>
                    <Option value="poison">poison</Option>
                    <Option value="electric">electric</Option>
                    <Option value="ground">ground</Option>
                    <Option value="fairy">fairy</Option>
                    <Option value="fighting">fighting</Option>
                    <Option value="psychic">psychic</Option>
                    <Option value="rock">rock</Option>
                    <Option value="ghost">ghost</Option>
                    <Option value="ice">ice</Option>
                    <Option value="dragon">dragon</Option>
                    <Option value="dark">dark</Option>
                    <Option value="steel">steel</Option>
                  </Select>
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Weather 1
                  </Label>
                  <Select
                    value={weather_one}
                    onChange={(event) => setWeather_one(event.target.value)}
                  >
                    <Option value="">Select Type</Option>
                    <Option value="weather_one">weather_one</Option>
                    <Option value="Sunny/clear">Sunny/clear</Option>
                    <Option value="Rainy">Rainy</Option>
                    <Option value="Partly cloudy">Partly cloudy</Option>
                    <Option value="Cloudy">Cloudy</Option>
                    <Option value="Windy">Windy</Option>
                    <Option value="Fog">Fog</Option>
                    <Option value="Snow">Snow</Option>
                  </Select>
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Weather 2
                  </Label>
                  <Select
                    value={weather_two}
                    onChange={(event) => setWeather_two(event.target.value)}
                  >
                    <Option value="">Select Type</Option>
                    <Option value="weather_one">weather_one</Option>
                    <Option value="Sunny/clear">Sunny/clear</Option>
                    <Option value="Rainy">Rainy</Option>
                    <Option value="Partly cloudy">Partly cloudy</Option>
                    <Option value="Cloudy">Cloudy</Option>
                    <Option value="Windy">Windy</Option>
                    <Option value="Fog">Fog</Option>
                    <Option value="Snow">Snow</Option>
                  </Select>
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    Stat Total
                  </Label>
                  <Input
                    value={stat_total}
                    onChange={(event) => setStat_total(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    ATK
                  </Label>
                  <Input
                    value={atk}
                    onChange={(event) => setAtk(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    DEF
                  </Label>
                  <Input
                    value={def}
                    onChange={(event) => setDef(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    STA
                  </Label>
                  <Input
                    value={sta}
                    onChange={(event) => setSta(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    Legendary
                  </Label>
                  <Input
                    value={legendary}
                    onChange={(event) => setLegendary(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Aquireable
                  </Label>
                  <Input
                    value={aquireable}
                    onChange={(event) => setAquireable(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Spawns
                  </Label>
                  <Input
                    value={spawns}
                    onChange={(event) => setSpawns(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Regional
                  </Label>
                  <Input
                    value={regional}
                    onChange={(event) => setRegional(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    Raidable
                  </Label>
                  <Input
                    value={raidable}
                    onChange={(event) => setRaidable(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Hatchable
                  </Label>
                  <Input
                    value={hatchable}
                    onChange={(event) => setHatchable(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Shiny
                  </Label>
                  <Input
                    value={shiny}
                    onChange={(event) => setShiny(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Nest
                  </Label>
                  <Input
                    value={nest}
                    onChange={(event) => setNest(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    New
                  </Label>
                  <Input
                    value={is_new}
                    onChange={(event) => setIs_new(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Not-Gettable
                  </Label>
                  <Input
                    value={not_gettable}
                    onChange={(event) => setNot_gettable(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    Future Evolve
                  </Label>
                  <Input
                    value={future_evolve}
                    onChange={(event) => setFuture_evolve(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
                <ColumnPokemon>
                  <Label>
                    100% CP @ 40
                  </Label>
                  <Input
                    value={cp_100_40}
                    onChange={(event) => setCp_100_40(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <ColumnPokemon>
                  <Label>
                    100% CP @ 39
                  </Label>
                  <Input
                    value={cp_100_39}
                    onChange={(event) => setCp_100_39(onlyNumbers(event.target.value))}
                    placeholder="Only Numbers"
                  />
                </ColumnPokemon>
              </Row>
              <Row>
                <Column>
                  <Center>
                    {
                      loading ?
                        <Ring color="#FFF" size={47}/>
                      :
                      <ButtonAdd>
                        Add Pokémon
                      </ButtonAdd>
                    }
                  </Center>
                </Column>
              </Row>
            </Form>
          </Container>
        </SectionPokemons>
      </Main>
      <Footer/>
    </>
  )
}

export { Add }
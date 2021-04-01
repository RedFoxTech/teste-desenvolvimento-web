import React, { FormEvent, useState } from 'react'
import { useModal } from '../../context/ModalContext'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from '../../services/api'
import TextInputField from 'components/TextInputField'
import { FormWrapper } from '../Form'
import * as S from './styles'

import Button from 'components/Button'
import Checkbox from 'components/CheckBox'
import Select from 'components/Select'

const FormAddPokemon = () => {
  const { changeModalView } = useModal()

  const [name, setName] = useState('')
  const [pokedexNumber, setpokedexNumber] = useState('')
  const [image, setImage] = useState('')
  const [generation, setGeneration] = useState(0)
  const [evolutionStage, setEvolutionStage] = useState(0)
  const [evolved, setEvolved] = useState(0)
  const [familyID, setfamilyID] = useState(0)
  const [crossGen, setCrossGen] = useState(0)
  const [pokemonType, setpokemonType] = useState('')
  const [pokemonType2, setpokemonType2] = useState('')
  const [weather, setWeather] = useState('')
  const [weather2, setWeather2] = useState('')
  const [statTotal, setstatTotal] = useState(0)
  const [atk, setAtk] = useState(0)
  const [def, setDef] = useState(0)
  const [sta, setSta] = useState(0)
  const [legendary, setLegendary] = useState(0)
  const [aquireable, setAquireable] = useState(0)
  const [spaws, setSpaws] = useState(0)
  const [regional, setRegional] = useState(0)
  const [raidable, setRaidable] = useState(0)
  const [hatchable, setHatchable] = useState(0)
  const [shiny, setShiny] = useState(0)
  const [nest, setNest] = useState(0)
  const [isNew, setIsNew] = useState(0)
  const [notGettable, setNotgettable] = useState(0)
  const [futureEvolve, setFutureEvolve] = useState(0)
  const [cp40, setCp40] = useState(0)
  const [cp39, setCp39] = useState(0)

  function resetFields() {
    setAquireable(0),
      setAtk(0),
      setCp39(0),
      setCp40(0),
      setCrossGen(0),
      setDef(0),
      setEvolutionStage(0),
      setEvolved(0),
      setFutureEvolve(0),
      setGeneration(0),
      setHatchable(0),
      setImage(''),
      setLegendary(0),
      setName(''),
      setNest(0),
      setNotgettable(0),
      setRaidable(0),
      setRegional(0),
      setShiny(0),
      setSpaws(0),
      setSta(0),
      setIsNew(0),
      setWeather(''),
      setWeather2(''),
      setfamilyID(0),
      setpokedexNumber(''),
      setpokemonType(''),
      setpokemonType2(''),
      setstatTotal(0)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await api.post('pokemons', {
      Name: name,
      'Pokedex Number': pokedexNumber,
      'Img name': image,
      Generation: generation,
      'Evolution Stage': evolutionStage,
      Evolved: evolved,
      FamilyID: familyID,
      'Cross Gen': crossGen,
      'Type 1': pokemonType,
      'Type 2': pokemonType2,
      'Weather 1': weather,
      'Weather 2': weather2,
      'STAT TOTAL': statTotal,
      New: isNew,
      ATK: atk,
      DEF: def,
      STA: sta,
      Legendary: legendary,
      Aquireable: aquireable,
      Spawns: spaws,
      Regional: regional,
      Raidable: raidable,
      Hatchable: hatchable,
      Shiny: shiny,
      Nest: nest,
      'Not-Gettable': notGettable,
      'Future Evolve': futureEvolve,
      '100% CP @ 40': cp40,
      '100% CP @ 39': cp39,
    })
    resetFields()
    toast.success('Pokemon cadastrado com sucesso.')
    changeModalView()
  }

  const options = [
    { value: 'bug' },
    { value: 'dark' },
    { value: 'dragon' },
    { value: 'electric' },
    { value: 'fairy' },
    { value: 'fighting' },
    { value: 'fire' },
    { value: 'flying' },
    { value: 'ghost' },
    { value: 'grass' },
    { value: 'ground' },
    { value: 'ice' },
    { value: 'normal' },
    { value: 'poison' },
    { value: 'psychic' },
    { value: 'rock' },
    { value: 'steel' },
    { value: 'water' },
  ]

  return (
    <FormWrapper>
      <Tabs>
        <TabList>
          <Tab>
            <h1>Basic fields</h1>
          </Tab>
          <Tab>
            <h1>Aditional Info</h1>
          </Tab>
        </TabList>
        <TabPanel>
          <form onSubmit={handleSubmit}>
            <TextInputField
              name="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              label="Name"
              type="text"
            />
            <Select
              name="Type 1"
              onChange={(event) => setpokemonType(event.target.value)}
              value={pokemonType}
              label="Type1"
              type="text"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </Select>
            <Select
              name="Type 2"
              onChange={(event) => setpokemonType2(event.target.value)}
              value={pokemonType2}
              label="Type1"
              type="text"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </Select>
            <TextInputField
              name="Weather 1"
              onChange={(event) => setWeather(event.target.value)}
              value={weather}
              label="Weather1"
              type="text"
            />
            <TextInputField
              name="Weather 2"
              onChange={(event) => setWeather2(event.target.value)}
              value={weather2}
              label="Weather2"
              type="text"
            />
            <TextInputField
              name="Image name"
              onChange={(event) => setImage(event.target.value)}
              value={image}
              label="Image name"
              type="text"
            />

            <S.ButtonsWrapper>
              <Button
                type="reset"
                onClick={() => {
                  changeModalView()
                  resetFields()
                }}
              >
                Cancelar
              </Button>
              <Button type="submit">Adicionar</Button>
            </S.ButtonsWrapper>
          </form>
        </TabPanel>

        <TabPanel>
          <TextInputField
            name="Pokedex Number"
            onChange={(event) => setpokedexNumber(event.target.value)}
            value={pokedexNumber}
            label="Pokedex Number"
            type="number"
          />
          <Checkbox
            labelColor="black"
            name="Evolved"
            onCheck={() => setEvolved(1)}
            value={evolved}
            label="Evolved"
          />
          <Checkbox
            labelColor="black"
            name="crossGen"
            onCheck={() => setCrossGen(1)}
            value={crossGen}
            label="Cross Gen"
          />
          <Checkbox
            labelColor="black"
            name="Legendary"
            onCheck={() => setLegendary(1)}
            value={legendary}
            label="Legendary"
          />
          <Checkbox
            labelColor="black"
            name="Aquireable"
            onCheck={() => setAquireable(1)}
            value={aquireable}
            label="Aquireable"
          />
          <Checkbox
            labelColor="black"
            name="Spaws"
            onCheck={() => setSpaws(1)}
            value={spaws}
            label="Spaws"
          />
          <Checkbox
            labelColor="black"
            name="Regional"
            onCheck={() => setRegional(1)}
            value={regional}
            label="Regional"
          />
          <Checkbox
            labelColor="black"
            name="Raidable"
            onCheck={() => setRaidable(1)}
            value={raidable}
            label="Raidable"
          />
          <Checkbox
            labelColor="black"
            name="Shiny"
            onCheck={() => setShiny(1)}
            value={shiny}
            label="Shiny"
          />
          <Checkbox
            labelColor="black"
            name="Nest"
            onCheck={() => setNest(1)}
            value={nest}
            label="Nest"
          />
          <Checkbox
            labelColor="black"
            name="Not-Gettable"
            onCheck={() => setNotgettable(1)}
            value={notGettable}
            label="Not-Gettable"
          />
          <Checkbox
            labelColor="black"
            name="New"
            onCheck={() => setIsNew(1)}
            value={isNew}
            label="New"
          />
          <Checkbox
            labelColor="black"
            name="Future Evolve"
            onCheck={() => setFutureEvolve(1)}
            value={futureEvolve}
            label="Future Evolve"
          />
        </TabPanel>
      </Tabs>
    </FormWrapper>
  )
}

export default FormAddPokemon

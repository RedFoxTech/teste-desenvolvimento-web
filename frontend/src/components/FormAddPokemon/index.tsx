import React, { FormEvent, useState } from 'react'
import { useModal } from '../../context/ModalContext'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

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
  const [familyID, setfamilyID] = useState(0)
  const [pokemonType, setpokemonType] = useState('')
  const [pokemonType2, setpokemonType2] = useState('')
  const [weather, setWeather] = useState('')
  const [weather2, setWeather2] = useState('')
  const [statTotal, setstatTotal] = useState(0)
  const [atk, setAtk] = useState(0)
  const [def, setDef] = useState(0)
  const [sta, setSta] = useState(0)
  const [hatchable, setHatchable] = useState(0)
  const [cp40, setCp40] = useState(0)
  const [cp39, setCp39] = useState(0)

  const [checkBoxesValues, setCheckBoxesValues] = useState({
    evolved: '0',
    crossGen: '0',
    legendary: '0',
    aquireable: '0',
    spaws: '1',
    regional: '0',
    raidable: '0',
    shiny: '0',
    nest: '0',
    notGettable: '0',
    isNew: '0',
    futureEvolve: '0',
  })

  function resetFields() {
    setCheckBoxesValues({
      evolved: '0',
      crossGen: '0',
      legendary: '0',
      aquireable: '0',
      spaws: '0',
      regional: '0',
      raidable: '0',
      shiny: '0',
      nest: '0',
      notGettable: '0',
      isNew: '0',
      futureEvolve: '0',
    }),
      setAtk(0),
      setCp39(0),
      setCp40(0),
      setDef(0),
      setEvolutionStage(0),
      setGeneration(0),
      setHatchable(0),
      setImage(''),
      setName(''),
      setSta(0),
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
      FamilyID: familyID,
      'Type 1': pokemonType,
      'Type 2': pokemonType2,
      'Weather 1': weather,
      'Weather 2': weather2,
      'STAT TOTAL': statTotal,
      ATK: atk,
      DEF: def,
      STA: sta,
      Hatchable: hatchable,
      '100% CP @ 40': cp40,
      '100% CP @ 39': cp39,
      'Cross Gen': checkBoxesValues.crossGen,
      Evolved: checkBoxesValues.evolved,
      New: checkBoxesValues.isNew,
      Legendary: checkBoxesValues.legendary,
      Aquireable: checkBoxesValues.aquireable,
      Spawns: checkBoxesValues.spaws,
      Regional: checkBoxesValues.regional,
      Raidable: checkBoxesValues.raidable,
      Shiny: checkBoxesValues.shiny,
      Nest: checkBoxesValues.nest,
      'Not-Gettable': checkBoxesValues.notGettable,
      'Future Evolve': checkBoxesValues.futureEvolve,
    })
    resetFields()
    alert('Pokemon cadastrado com sucesso.')
    changeModalView()
  }

  const checkboxFields = [
    {
      label: 'Evolved',
      name: 'evolved',
      value: `${checkBoxesValues.evolved}`,
    },
    {
      label: 'Cross Gen',
      name: 'crossGen',
      value: `${checkBoxesValues.crossGen}`,
    },
    {
      label: 'Legendary',
      name: 'legendary',
      value: `${checkBoxesValues.legendary}`,
    },
    {
      label: 'Aquireable',
      name: 'aquireable',
      value: `${checkBoxesValues.aquireable}`,
    },
    {
      label: 'Spaws',
      name: 'spaws',
      value: `${checkBoxesValues.spaws}`,
    },
    {
      label: 'Regional',
      name: 'regional',
      value: `${checkBoxesValues.regional}`,
    },
    {
      label: 'Raidable',
      name: 'raidable',
      value: `${checkBoxesValues.raidable}`,
    },
    {
      label: 'Shiny',
      name: 'shiny',
      value: `${checkBoxesValues.shiny}`,
    },
    {
      label: 'Not-Gettable',
      name: 'notGettable',
      value: `${checkBoxesValues.notGettable}`,
    },
    {
      label: 'Nest',
      name: 'nest',
      value: `${checkBoxesValues.nest}`,
    },
    {
      label: 'Future Evolve',
      name: 'futureEvolve',
      value: `${checkBoxesValues.futureEvolve}`,
    },
  ]

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

  const handleCheckbox = (name: string, value: string) => {
    if (value === '0') {
      const newValue = '1'
      console.log(checkBoxesValues)
      setCheckBoxesValues((s) => ({ ...s, [name]: newValue }))
      console.log(name, newValue)
      console.log(checkBoxesValues)
    } else {
      const newValue = '0'
      console.log(checkBoxesValues)
      setCheckBoxesValues((s) => ({ ...s, [name]: newValue }))
      console.log(name, newValue)
      console.log(checkBoxesValues)
    }
  }

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

          {checkboxFields.map((field) => (
            <Checkbox
              key={field.name}
              labelColor="black"
              isChecked={field.value === '1' ? true : false}
              onCheck={() => handleCheckbox(field.name, field.value)}
              name={field.name}
              label={field.label}
              value={field.value}
            />
          ))}
        </TabPanel>
      </Tabs>
    </FormWrapper>
  )
}

export default FormAddPokemon

import React, { FormEvent, useState } from 'react'
import { useModal } from '../../context/ModalContext'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import api from '../../services/api'
import TextInputField from 'components/TextInputField'
import { FormError, FormWrapper } from '../Form'
import * as S from './styles'

import Button from 'components/Button'
import Checkbox from 'components/CheckBox'
import Select from 'components/Select'

import { FiPlus, FiXCircle } from 'react-icons/fi'

import {
  FieldErrors,
  addPokemonValidate,
  FieldsToValidate,
} from '../../utils/validations'

const FormAddPokemon = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const { changeModalView } = useModal()
  const [formValues, setFormValues] = useState<FieldsToValidate>({
    name: '',
    pokedexNumber: 0,
    generation: 0,
    evolutionStage: 0,
    familyID: 0,
    pokemonType: '',
    pokemonType2: '',
    weather: '',
    weather2: '',
    atk: 0,
    def: 0,
    sta: 0,
    hatchable: 0,
    cp39: 0,
    cp40: 0,
  })

  const [image, setImage] = useState<any>()
  const [previewImage, setPreviewImage] = useState<string>('')

  const [checkBoxesValues, setCheckBoxesValues] = useState({
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
      setImage(undefined),
      setFormValues({
        name: '',
        pokedexNumber: 0,
        generation: 0,
        evolutionStage: 0,
        familyID: 0,
        pokemonType: '',
        pokemonType2: '',
        weather: '',
        weather2: '',
        atk: 0,
        def: 0,
        sta: 0,
        hatchable: 0,
        cp39: 0,
        cp40: 0,
      })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setFormError('')
    const errors = addPokemonValidate(formValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      console.log(errors)
      return
    }

    setFieldError({})

    const data = new FormData()
    const calcStat =
      Number(formValues.atk) + Number(formValues.def) + Number(formValues.sta)

    data.append('avatar', image)
    data.append('Name', formValues.name)
    data.append('Pokedex Number', formValues.pokedexNumber.toString())
    data.append('Type 1', formValues.pokemonType)
    if (formValues.pokemonType2) {
      data.append('Type 2', formValues.pokemonType2)
    }
    data.append('Weather 1', formValues.weather)
    if (formValues.weather2) {
      data.append('Weather 2', formValues.weather2)
    }
    data.append('Generation', formValues.generation.toString())
    data.append('Evolution Stage', formValues.evolutionStage.toString())
    if (formValues.familyID) {
      data.append('FamilyID', formValues.familyID.toString())
    }
    data.append('STAT TOTAL', calcStat.toString())
    data.append('ATK', formValues.atk.toString())
    data.append('DEF', formValues.def.toString())
    data.append('STA', formValues.sta.toString())
    data.append('Hatchable', formValues.hatchable.toString())
    data.append('100% CP @ 40', formValues.cp40.toString())
    data.append('100% CP @ 39', formValues.cp39.toString())
    data.append('Cross Gen', checkBoxesValues.crossGen)
    data.append('Evolved', checkBoxesValues.evolved)
    data.append('New', checkBoxesValues.isNew)
    data.append('Legendary', checkBoxesValues.legendary)
    data.append('Aquireable', checkBoxesValues.aquireable)
    data.append('Spawns', checkBoxesValues.spaws)
    data.append('Regional', checkBoxesValues.regional)
    data.append('Raidable', checkBoxesValues.raidable)
    data.append('Shiny', checkBoxesValues.shiny)
    data.append('Nest', checkBoxesValues.nest)
    data.append('Not-Gettable', checkBoxesValues.notGettable)
    data.append('Future Evolve', checkBoxesValues.futureEvolve)

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    await api.post('pokemons', data, config)

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
    { type: 'bug' },
    { type: 'dark' },
    { type: 'dragon' },
    { type: 'electric' },
    { type: 'fairy' },
    { type: 'fighting' },
    { type: 'fire' },
    { type: 'flying' },
    { type: 'ghost' },
    { type: 'grass' },
    { type: 'ground' },
    { type: 'ice' },
    { type: 'normal' },
    { type: 'poison' },
    { type: 'psychic' },
    { type: 'rock' },
    { type: 'steel' },
    { type: 'water' },
  ]

  const handleCheckbox = (name: string, value: string) => {
    if (value === '0') {
      const newValue = '1'
      setCheckBoxesValues((s) => ({ ...s, [name]: newValue }))
    } else {
      const newValue = '0'
      setCheckBoxesValues((s) => ({ ...s, [name]: newValue }))
    }
  }

  const handleInput = (field: string, value: string) => {
    setFormValues((s) => ({ ...s, [field]: value }))
  }

  const handleSelectedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    setImage(e.target.files[0])
    console.log(image)
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
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
          <Tab>
            <h1>Stats</h1>
          </Tab>
        </TabList>
        <TabPanel>
          {!!formError && (
            <FormError>
              <FiXCircle /> {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <>
              <S.Label htmlFor="image">Adicione a imagem do Pokemon</S.Label>
              <S.ImagesContainer>
                {image ? (
                  <S.Image src={previewImage} alt={formValues.name} />
                ) : (
                  <S.NewImage htmlFor="image">
                    <FiPlus size={24} color="#15b6d6" />
                  </S.NewImage>
                )}
              </S.ImagesContainer>
              <S.Input type="file" onChange={handleSelectedImage} id="image" />
            </>
            <TextInputField
              name="Name"
              error={fieldError?.name}
              onInputChange={(v) => handleInput('name', v)}
              value={formValues.name}
              label="Name"
              type="text"
            />
            <TextInputField
              name="Pokedex Number"
              error={fieldError?.pokedexNumber}
              onInputChange={(v) => handleInput('pokedexNumber', v)}
              value={formValues.pokedexNumber}
              label="Pokedex Number"
              type="number"
            />
            <Select
              name="Type1"
              onInputChange={(v) => handleInput('pokemonType', v)}
              value={formValues.pokemonType}
              error={fieldError?.pokemonType}
              label="Type1"
              type="text"
            >
              {options.map((option) => (
                <option key={option.type} value={option.type}>
                  {option.type}
                </option>
              ))}
            </Select>
            <Select
              name="Type2"
              error={fieldError?.pokemonType2}
              onInputChange={(v) => handleInput('pokemonType2', v)}
              value={formValues.pokemonType2 ? formValues.pokemonType2 : ''}
              label="Type2"
              type="text"
            >
              {options.map((option) => (
                <option key={option.type} value={option.type}>
                  {option.type}
                </option>
              ))}
            </Select>

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
            name="Weather 1"
            error={fieldError?.weather1}
            onInputChange={(v) => handleInput('weather', v)}
            value={formValues.weather}
            label="Weather 1"
            type="text"
          />
          <TextInputField
            name="Weather 2"
            error={fieldError?.weather2}
            onInputChange={(v) => handleInput('weather2', v)}
            value={formValues.weather2}
            label="Weather 2"
            type="text"
          />
          <TextInputField
            name="Hatchable"
            error={fieldError?.hatchable}
            onInputChange={(v) => handleInput('hatchable', v)}
            value={formValues.hatchable}
            label="Hatchable"
            type="number"
          />
          <TextInputField
            name="Family ID"
            error={fieldError?.familyID}
            onInputChange={(v) => handleInput('familyID', v)}
            value={formValues.familyID}
            label="Family ID"
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
        <TabPanel>
          <TextInputField
            name="Generation"
            error={fieldError?.generation}
            onInputChange={(v) => handleInput('generation', v)}
            value={formValues.generation}
            label="Generation"
            type="number"
          />
          <TextInputField
            name="Evolution Stage"
            error={fieldError?.evolutionStage}
            onInputChange={(v) => handleInput('evolutionStage', v)}
            value={formValues.evolutionStage}
            label="Evolution Stage"
            type="number"
          />
          <TextInputField
            name="100% CP @ 39"
            error={fieldError?.cp39}
            onInputChange={(v) => handleInput('cp39', v)}
            value={formValues.cp39}
            label="100% CP @ 39"
            type="number"
          />
          <TextInputField
            name="100% CP @ 40"
            error={fieldError?.cp40}
            onInputChange={(v) => handleInput('cp40', v)}
            value={formValues.cp40}
            label="100% CP @ 40"
            type="number"
          />
          <TextInputField
            name="ATK"
            error={fieldError?.atk}
            onInputChange={(v) => handleInput('atk', v)}
            value={formValues.atk}
            label="ATK"
            type="number"
          />
          <TextInputField
            name="DEF"
            error={fieldError?.def}
            onInputChange={(v) => handleInput('def', v)}
            value={formValues.def}
            label="DEF"
            type="number"
          />
          <TextInputField
            name="STA"
            error={fieldError?.sta}
            onInputChange={(v) => handleInput('sta', v)}
            value={formValues.sta}
            label="STA"
            type="number"
          />
        </TabPanel>
      </Tabs>
    </FormWrapper>
  )
}

export default FormAddPokemon

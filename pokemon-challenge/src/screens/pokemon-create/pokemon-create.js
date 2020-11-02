import React from  'react'

import NavBar from '../../components/nav-bar/nav-bar.js'

import api from '../../services/api'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Select, Switch  } from 'formik-material-ui';

import { GenerationsString } from '../../utils/Generations'
import Eggs from '../../utils/Eggs'
import Types from '../../utils/Types'

import { Button, LinearProgress } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import './pokemon-create.css'


const PokemonSchema = Yup.object().shape({
  pokedexNum: Yup.number()
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  generation: Yup.string()
    .required('Required'),
  type1: Yup.string()
    .required('Required'),
  type2: Yup.string()
    .required('Required'),
  atk: Yup.number()
    .required('Required'),
  def: Yup.number()
    .required('Required'),
  sta: Yup.number()
    .required('Required'),
  cp40: Yup.number()
    .required('Required'),
  hatchable: Yup.number()
    .required('Required'),
});

function PokemonCreate() {
  return (
    <>
      <div className="pokemon-create">
        <NavBar title={'Pokemon Create'} home/>
      </div>
      <main>
        <div className='form'>
          <Formik
            initialValues={{
              pokedexNum: '',
              name: '',
              generation: 1,
              type1: null,
              type2: null,
              atk: '',
              def: '',
              sta: '',
              cp40: '',
              legendary: false,
              hatchable: 0,
            }}
            validationSchema={PokemonSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {

              const { pokedexNum, name, generation, type1, type2, atk, def, sta, cp40, legendary, hatchable } = values

              api.post('/pokemon', {
                pokedexNum, 
                name, 
                generation,
                type: [type1, type2],
                atk,
                def, 
                sta, 
                cp40,
                legendary: legendary ? 1 : 0,
                hatchable
              })
                .then(res => {
                  setSubmitting(false)
                  resetForm()
                })
                .catch(err => console.log('something wrong'))
            }}
          >
            {({ submitForm, isSubmitting, values, handleChange}) => (
              <Form>
                <div className='first-line'>
                  <Field
                    component={TextField}
                    required
                    name="pokedexNum"
                    label="Pokedex"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">#</InputAdornment>,
                    }}
                    onChange={handleChange}
                    value={values.pokedexNum}
                  />
                  <Field
                    component={TextField}
                    required
                    name="name"
                    label="Name"
                    onChange={handleChange}
                    value={values.name}
                    />
                </div>
                <div className='second-line'>
                  <div>
                    <InputLabel htmlFor="generation">Generation</InputLabel>
                    <Field
                      component={Select}
                      required
                      name="generation"
                      onChange={handleChange}
                      value={values.generation}
                      inputProps={{
                        id: 'generation',
                      }}
                      >{
                        GenerationsString.map((val, index) => {
                          return <MenuItem value={index+1}>{val}</MenuItem>
                        })
                      }
                    </Field>
                  </div>
                  <br />
                  <div>
                    <InputLabel htmlFor="type1">Type 1</InputLabel>
                    <Field
                      component={Select}
                      required
                      name="type1"
                      onChange={handleChange}
                      value={values.type1}
                      inputProps={{
                        id: 'type1',
                      }}
                      >{
                        Types.map((val, index) => {
                          return <MenuItem value={val}>{val}</MenuItem>
                        })
                      }
                    </Field>
                  </div>
                  <br />
                  <div>
                    <InputLabel htmlFor="type2">Type 2</InputLabel>
                    <Field
                      component={Select}
                      required
                      name="type2"
                      onChange={handleChange}
                      value={values.type2}
                      inputProps={{
                        id: 'type2',
                      }}
                      >{
                        Types.map((val, index) => {
                          return <MenuItem value={val}>{val}</MenuItem>
                        })
                      }
                    </Field>
                  </div>
                  <br />
                  <div>
                    <InputLabel htmlFor="eggs">Eggs</InputLabel>
                    <Field
                      component={Select}
                      required
                      name="hatchable"
                      onChange={handleChange}
                      value={values.hatchable}
                      inputProps={{
                        id: 'eggs',
                      }}
                      >{
                        Eggs.map((val, index) => {
                          return <MenuItem value={val}>{val}</MenuItem>
                        })
                      }
                    </Field>
                  </div>
                </div>
                <div className='third-line'>
                  <Field
                    component={TextField}
                    required
                    name="atk"
                    label="Atk"
                    onChange={handleChange}
                    value={values.atk}
                  />
                  <Field
                    component={TextField}
                    required
                    name="def"
                    label="Def"
                    onChange={handleChange}
                    value={values.def}
                  />
                  <Field
                    component={TextField}
                    required
                    name="sta"
                    label="Sta"
                    onChange={handleChange}
                    value={values.sta}
                  />
                  <Field
                    component={TextField}
                    required
                    name="cp40"
                    label="CP40"
                    onChange={handleChange}
                    value={values.cp40}
                  />
                  <div>
                    <InputLabel htmlFor="legendary">Legendary</InputLabel>
                    <Field 
                      component={Switch} 
                      type="checkbox" 
                      name="legendary" 
                      checked={values.legendary} 
                      onChange={handleChange}
                      inputProps={{
                        id: 'legendary',
                    }}/>
                  </div>
                </div>
                {isSubmitting && <LinearProgress />}
                <div className='submit-button'>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    size='large'
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}

export default PokemonCreate;

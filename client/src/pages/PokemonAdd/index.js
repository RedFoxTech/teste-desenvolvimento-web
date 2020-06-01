import React, { useEffect, useState } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import api from '../../services/api';

import history from '../../services/history';

import renderFormSelect from '../../utils/renderFormSelects';
import { families, booleans } from '../../utils/staticSelects';
import FormLogic from '../../components/Forms/PokemonForm/FormLogic';
import CustomSelect from '../../components/CustomSelect';
import CustomField from '../../components/CustomField';
import CustomButton from '../../components/CustomButton';

function FormAddPokemonFields({
  values,
  errors,
  handleChange,
  handleSubmit,
  setFieldValue,
  submitForm,
}) {
  const [selects, setSelects] = useState({});
  const [formValues, setFormValues] = useState();

  useEffect(() => {
    loadSelects();
  }, []);

  async function loadSelects() {
    const generations = await api.get('generations');
    const types = await api.get('types');
    const weathers = await api.get('weathers');
    const evolution_stages = await api.get('evolution_stages');
    const raidables = await api.get('raidables');
    const legendaries = await api.get('legendaries');
    const hatchables = await api.get('hatchables');
    const aquireables = await api.get('aquireables');

    setSelects({
      generations: renderFormSelect({
        key: 'generations',
        selects: generations.data,
      }),
      types: renderFormSelect({ key: 'types', selects: types.data }),
      weathers: renderFormSelect({ key: 'weathers', selects: weathers.data }),
      evolution_stages: renderFormSelect({
        key: 'evolution_stages',
        selects: evolution_stages.data,
      }),
      raidables: renderFormSelect({
        key: 'raidables',
        selects: raidables.data,
      }),
      legendaries: renderFormSelect({
        key: 'legendaries',
        selects: legendaries.data,
      }),
      hatchables: renderFormSelect({
        key: 'hatchables',
        selects: hatchables.data,
      }),
      aquireables: renderFormSelect({
        key: 'aquireables',
        selects: aquireables.data,
      }),
    });
  }

  return (
    <Form>
      <div
        style={{ width: '95vw' }}
        className="d-flex justify-content-between align-items-center"
      >
        <div></div>
        <h1 className="mb-5 mt-5">Add Pokemon</h1>
        <div className="mr-5">
          <CustomButton
            label="Back"
            onClick={() => {
              history.push('/');
            }}
            variant="primary"
            type="button"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Form style={{ width: '80%' }}>
          <Form.Row>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="pokedex_number"
                label="Pokedex Number"
                value={values.pokedex_number}
                error={errors.pokedex_number}
                handleChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomField
                editValue={formValues && formValues.name}
                id="name"
                label="Name"
                value={values.name}
                error={errors.name}
                handleChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomField
                id="img_name"
                label="Image Name"
                value={values.img_name}
                error={errors.img_name}
                handleChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.generations}
                id="generation_id"
                label="Generation"
                value={values.generation_id}
                handleChange={(event) =>
                  setFieldValue('generation_id', event.value)
                }
                error={errors.generation_id}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.evolution_stages}
                id="evolution_stage_id"
                label="Evolution Stage"
                value={values.evolution_stage_id}
                handleChange={(event) =>
                  setFieldValue('evolution_stage_id', event.value)
                }
                error={errors.evolution_stage_id}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="evolved"
                label="Evolved"
                value={values.evolved}
                handleChange={(event) => setFieldValue('evolved', event.value)}
                error={errors.evolved}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={families}
                id="family_id"
                label="Family Id"
                value={values.family_id}
                handleChange={(event) =>
                  setFieldValue('family_id', event.value)
                }
                error={errors.family_id}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="cross_gen"
                label="Cross Gen"
                value={values.cross_gen}
                handleChange={(event) =>
                  setFieldValue('cross_gen', event.value)
                }
                error={errors.cross_gen}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.types}
                id="type_id_1"
                label="Type 1"
                value={values.type_id_1}
                handleChange={(event) =>
                  setFieldValue('type_id_1', event.value)
                }
                error={errors.type_id_1}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.types}
                id="type_id_2"
                label="Type 2"
                value={values.type_id_2}
                handleChange={(event) =>
                  setFieldValue('type_id_2', event.value)
                }
                error={errors.type_id_2}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.weathers}
                id="weather_id_1"
                label="Weather 1"
                value={values.weather_id_1}
                handleChange={(event) =>
                  setFieldValue('weather_id_1', event.value)
                }
                error={errors.weather_id_1}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.weathers}
                id="weather_id_2"
                label="Weather 2"
                value={values.weather_id_2}
                handleChange={(event) =>
                  setFieldValue('weather_id_2', event.value)
                }
                error={errors.weather_id_2}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="stat_total"
                label="Total Stat"
                value={values.stat_total}
                error={errors.stat_total}
                handleChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="atk"
                label="Atk"
                value={values.atk}
                error={errors.atk}
                handleChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="def"
                label="Def"
                value={values.def}
                error={errors.def}
                handleChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="sta"
                label="Sta"
                value={values.sta}
                error={errors.sta}
                handleChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.legendaries}
                id="legendary_id"
                label="Legendary"
                value={values.legendary_id}
                handleChange={(event) =>
                  setFieldValue('legendary_id', event.value)
                }
                error={errors.legendary_id}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.aquireables}
                id="aquireable_id"
                label="Aquireables"
                value={values.aquireable_id}
                handleChange={(event) =>
                  setFieldValue('aquireable_id', event.value)
                }
                error={errors.aquireable_id}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="spawns"
                label="Spawns"
                value={values.spawns}
                handleChange={(event) => setFieldValue('spawns', event.value)}
                error={errors.spawns}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="regional"
                label="Regional"
                value={values.regional}
                handleChange={(event) => setFieldValue('regional', event.value)}
                error={errors.regional}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.raidables}
                id="raidable_id"
                label="Raidable"
                value={values.raidable_id}
                handleChange={(event) =>
                  setFieldValue('raidable_id', event.value)
                }
                error={errors.raidable_id}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={selects.hatchables}
                id="hatchable_id"
                label="Hatchable"
                value={values.hatchable_id}
                handleChange={(event) =>
                  setFieldValue('hatchable_id', event.value)
                }
                error={errors.hatchable_id}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="shiny"
                label="Shiny"
                value={values.shiny}
                handleChange={(event) => setFieldValue('shiny', event.value)}
                error={errors.shiny}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="nest"
                label="Nest"
                value={values.nest}
                handleChange={(event) => setFieldValue('nest', event.value)}
                error={errors.nest}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="new"
                label="New"
                value={values.new}
                handleChange={(event) => setFieldValue('new', event.value)}
                error={errors.new}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="not_gettable"
                label="Not-Gettable"
                value={values.not_gettable}
                handleChange={(event) =>
                  setFieldValue('not_gettable', event.value)
                }
                error={errors.not_gettable}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <CustomSelect
                options={booleans}
                id="future_evolve"
                label="Future Evolve"
                value={values.future_evolve}
                handleChange={(event) =>
                  setFieldValue('future_evolve', event.value)
                }
                error={errors.future_evolve}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="hundred_percent_cp_40"
                label="100% CP @ 40"
                value={values.hundred_percent_cp_40}
                error={errors.hundred_percent_cp_40}
                handleChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <CustomField
                type="number"
                id="hundred_percent_cp_39"
                label="100% CP @ 39"
                value={values.hundred_percent_cp_39}
                error={errors.hundred_percent_cp_39}
                handleChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}></Form.Group>
          </Form.Row>
          <Form.Row className="mx-auto mt-2 mb-5" style={{ width: 80 }}>
            <CustomButton
              label="Save"
              onClick={() => {
                submitForm();
              }}
              variant="primary"
              type="button"
            />
          </Form.Row>
        </Form>
      </div>
    </Form>
  );
}

const PokemonAdd = FormLogic(FormAddPokemonFields);

export default PokemonAdd;

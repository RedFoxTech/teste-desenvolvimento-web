import { render } from 'react-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { NotificationManager } from 'react-notifications';

import history from '../../../services/history';
import api from '../../../services/api';

const FormLogic = withFormik({
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    pokedex_number: Yup.number().required('Pokedex Number is required'),
    generation_id: Yup.number().required('Generation is required!'),
    name: Yup.string().required('Name is required!'),
    img_name: Yup.string().required('Image Name is required!'),
    evolved: Yup.bool().required('Evolved is required!'),
    cross_gen: Yup.bool().required('Cross Gen is required!'),
    stat_total: Yup.number().required('Total Stat is required!'),
    atk: Yup.number().required('Atk is required!'),
    def: Yup.number().required('Def is required!'),
    sta: Yup.number().required('Stat is required!'),
    spawns: Yup.bool().required('Spawns Gen is required!'),
    regional: Yup.bool().required('Regional is required!'),
    shiny: Yup.bool().required('Shiny is required!'),
    nest: Yup.bool().required('Nest is required!'),
    new: Yup.bool().required('New is required!'),
    not_gettable: Yup.bool().required('Not-Gettable is required!'),
    future_evolve: Yup.bool().required('Future Evolve is required!'),
    hundred_percent_cp_40: Yup.number().required('100% CP @ 40 is required!'),
    hundred_percent_cp_39: Yup.number().required('100% CP @ 39 is required!'),
    evolution_stage_id: Yup.number().required('Evolution Stage is required!'),
    family_id: Yup.number().required('Family Id is required!'),
    raidable_id: Yup.number().required('Raidable is required!'),
    hatchable_id: Yup.number().required('Hatchable is required!'),
    aquireable_id: Yup.number().required('Aquireable is required!'),
    legendary_id: Yup.number().required('Legendary is required!'),
    type_id_1: Yup.number().required('Type 1 is required!'),
    type_id_2: Yup.number().required('Type 2 is required!'),
    weather_id_1: Yup.number().required('Weather 1 is required!'),
    weather_id_2: Yup.number().required('Weather 2 is required!'),
  }),
  mapPropsToValues: (props) => ({
    name: '',
    pokedex_number: '',
    img_name: '',
    evolved: '',
    cross_gen: '',
    stat_total: '',
    atk: '',
    def: '',
    sta: '',
    spawns: '',
    regional: '',
    shiny: '',
    nest: '',
    new: '',
    not_gettable: '',
    future_evolve: '',
    hundred_percent_cp_40: '',
    hundred_percent_cp_39: '',
    evolution_stage_id: '',
    family_id: '',
    raidable_id: '',
    hatchable_id: '',
    aquireable_id: '',
    legendary_id: '',
    generation_id: '',
    type_id_1: '',
    type_id_2: '',
    weather_id_1: '',
    weather_id_2: '',
  }),
  handleSubmit: async (values, props) => {
    const id = values.id;
    delete values['id'];
    delete values['createdAt'];
    delete values['updatedAt'];
    if (history.location.pathname.split('/')[1] === 'add') {
      try {
        await api.post(`pokemons`, values);
        history.push('/');
      } catch (err) {
        NotificationManager.success(err.response.data.error, 'Error');
      }
    } else {
      try {
        await api.put(`pokemons/${id}`, values);
        history.push('/');
      } catch (err) {
        NotificationManager.error('Error', 'Error');
      }
    }
  },
});

export default FormLogic;

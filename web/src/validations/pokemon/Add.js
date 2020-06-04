import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required().min(3),
  type_1: Yup.string().required().min(3),
  type_2: Yup.string().required().min(3),
});
export default schema;

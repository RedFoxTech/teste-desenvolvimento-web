import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string('Digite um nome válido!')
    .required('Campo nome é obrigatório!')
    .min(3),
  type_1: Yup.string('Digite um tipo primário válido!')
    .required('Campo Tipo 1 é obrigatório!')
    .min(3),
  type_2: Yup.string('Digite um tipo secundário válido!')
    .required('Campo Tipo 2 é obrigatório!')
    .min(3),
});
export default schema;

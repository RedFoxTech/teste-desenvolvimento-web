import paths from './path';
import schemas from './schemas';
import components from './components';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Proofy API',
    description: 'API para prover serviço de cadastro de provas',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/api',
    },
  ],
  tags: [
    {
      name: 'Exams',
    },
    {
      name: 'Questions',
    },
    {
      name: 'Options',
    },
  ],
  paths,
  schemas,
  components,
};

export const getExamPath = {
  get: {
    tags: ['Exams'],
    summary: 'Rota para visualizar uma prova específica',
    description: `A aplicação ainda não integra de autenticação, então essa rota pode ser acessada por qualquer nível de requisição
      Caso a prova não possua questões, será entregue somente os dados informativos como **nome**, **descrição** e **tipo**,
    `,
    parameters: [
      {
        in: 'param',
        name: 'exam_id',
        required: true,
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/exam',
            },
          },
        },
      },
      403: {
        $ref: '#components/forbidden',
      },
      500: {
        $ref: '#components/serverError',
      },
    },
  },
};

export const updateExamPath = {
  put: {
    tags: ['Exams'],
    summary: 'Rota atualizar uma prova',
    description: `É necessário fornecer todos os parâmetros como **name**, **description** e **type**`,
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
      400: {
        $ref: '#components/badRequest',
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

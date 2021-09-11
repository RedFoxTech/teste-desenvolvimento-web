export const updateOptionPath = {
  put: {
    tags: ['Options'],
    summary: 'Rota para edição de options',
    description:
      'Partimos da premissa de que uma option só deve ser alterada e nao excluída para que não implique no fluxo da avaliação.',
    parameters: [
      {
        in: 'param',
        name: 'question_id',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateOptionSchema',
          },
        },
      },
    },
    responses: {
      204: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/option',
            },
          },
        },
      },
      400: {
        $ref: '#components/badRequest',
      },
      500: {
        $ref: '#components/serverError',
      },
    },
  },
};

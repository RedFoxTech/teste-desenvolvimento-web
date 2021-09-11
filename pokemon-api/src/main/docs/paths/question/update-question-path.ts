export const updateQuestionPath = {
  put: {
    tags: ['Questions'],
    summary: 'Rota atualizar uma questão',
    description: `É necessário fornecer **statement** e **points**`,
    parameters: [
      {
        in: 'param',
        name: 'option_id',
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
              $ref: '#/schemas/question',
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

export const optionPath = {
  post: {
    tags: ['Options'],
    summary: 'Rota para criação de options',
    description:
      'Para criar options, vamos seguir a regra de negócio de que todas as question devem ter 05 opções de resposta.',
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
            $ref: '#/schemas/optionParamSchema',
          },
        },
      },
    },
    responses: {
      204: {
        description: 'Success',
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

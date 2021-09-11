export const questionPath = {
  post: {
    tags: ['Questions'],
    summary: 'Rota para criação de questão',
    description:
      'Primeiro crie uma questão e depois com ela criada no banco de dados adicione suas opções.',
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
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/questionParamSchema',
          },
        },
      },
    },
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
      500: {
        $ref: '#components/serverError',
      },
    },
  },
};

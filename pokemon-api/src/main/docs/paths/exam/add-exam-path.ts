export const examPath = {
  post: {
    tags: ['Exams'],
    summary: 'Rota para criação de uma nova prova',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/examParamSchema',
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
              $ref: '#/schemas/exam',
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

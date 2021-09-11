export const deleteQuestionPath = {
  delete: {
    tags: ['Questions'],
    summary: 'Rota para deletar uma questão',
    description: `Ao deletar uma questão, todas as options relacionadas à ela sofreram um CASCADE no banco de dados.`,
    parameters: [
      {
        in: 'param',
        name: 'question_id',
        required: true,
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
    ],
    responses: {
      204: {
        description: 'Success',
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

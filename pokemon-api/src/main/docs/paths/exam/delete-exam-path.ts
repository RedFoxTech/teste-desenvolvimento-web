export const deleteExamPath = {
  delete: {
    tags: ['Exams'],
    summary: 'Rota para deletar uma prova específica',
    description: `Ao deletar uma prova, todas as question e logo as options relacionadas à ela sofreram um CASCADE no banco de dados.`,
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

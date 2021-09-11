export const optionsParamsSchema = {
  type: 'object',
  properties: {
    options: {
      type: 'array',
      items: {
        $ref: '#/schemas/addOptionParam',
      },
    },
  },
};

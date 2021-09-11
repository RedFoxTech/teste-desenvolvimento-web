export const badRequest = {
  description: 'Invalid requisition',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};

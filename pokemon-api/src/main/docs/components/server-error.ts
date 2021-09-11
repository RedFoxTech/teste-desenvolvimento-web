export const serverError = {
  description: 'Internal server',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};

export const forbidden = {
  description: 'Access Denied',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};

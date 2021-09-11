export const examSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    questions: {
      type: 'array',
      items: {
        $ref: '#/schemas/question',
      },
    },
    created_at: {
      type: 'string',
    },
    updated_at: {
      type: 'string',
    },
  },
};

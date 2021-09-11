export const questionSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    statement: {
      type: 'string',
    },
    points: {
      type: 'number',
    },
    exam_id: {
      type: 'string',
    },
    options: {
      type: 'array',
      items: {
        $ref: '#/schemas/option',
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

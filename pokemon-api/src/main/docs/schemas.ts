import {
  examSchema,
  examParamsSchema,
  errorSchema,
  questionParamsSchema,
  questionSchema,
  option,
  optionsParamsSchema,
  optionSchema,
  updateOptionSchema,
} from './schemas/';

export default {
  examParamSchema: examParamsSchema,
  exam: examSchema,
  error: errorSchema,
  question: questionSchema,
  questionParamSchema: questionParamsSchema,
  optionParamSchema: optionsParamsSchema,
  option: option,
  addOptionParam: optionSchema,
  updateOptionSchema: updateOptionSchema,
};

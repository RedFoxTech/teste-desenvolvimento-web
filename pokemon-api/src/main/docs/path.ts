import {
  examPath,
  getExamPath,
  deleteExamPath,
  updateExamPath,
  questionPath,
  updateQuestionPath,
  deleteQuestionPath,
  optionPath,
  updateOptionPath,
} from './paths';

export default {
  '/exam': examPath,
  '/exam/{exam_id}': getExamPath,
  '/exam/{exam_id}/': deleteExamPath,
  '/exam/{exam_id}/update': updateExamPath,

  '/question/{exam_id}': questionPath,
  '/question/{question_id}': updateQuestionPath,
  '/question/delet/{question_id}': deleteQuestionPath,
  '/option/{question_id}': optionPath,
  '/option/{option_id}': updateOptionPath,
};

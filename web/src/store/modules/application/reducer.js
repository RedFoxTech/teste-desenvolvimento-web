import produce from 'immer';

const INITIAL_STATE = {
  searchInput: '',
  page: 1,
  length: 0,
};

export default function application(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@application/SET_INPUT':
      return produce(state, (draft) => {
        draft.searchInput = action.payload.searchInput;
      });
    case '@application/SET_PAGE':
      return produce(state, (draft) => {
        draft.page = action.payload.page;
        draft.searchInput = '';
      });
    case '@application/SET_LENGTH':
      return produce(state, (draft) => {
        draft.length = action.payload.length;
      });
    default:
      return state;
  }
}

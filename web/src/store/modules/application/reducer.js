import produce from 'immer';

const INITIAL_STATE = {
  searchInput: '',
  page: 1,
  length: 0,
  pokemon_id: null,
};

export default function application(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@application/SET_INPUT':
      return produce(state, (draft) => {
        draft.searchInput = action.payload.searchInput;
        draft.page = 1;
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
    case '@application/SET_ID':
      return produce(state, (draft) => {
        draft.pokemon_id = action.payload.pokemon_id;
        draft.page = 1;
        draft.searchInput = '';
      });
    case '@pokemon/UPDATE_SUCCESS':
      return produce(state, (draft) => {
        draft.page = 1;
      });
    case '@pokemon/DELETE_SUCCESS':
      return produce(state, (draft) => {
        draft.page = 1;
      });
    default:
      return state;
  }
}

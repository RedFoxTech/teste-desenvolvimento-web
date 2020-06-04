import { produce } from 'immer';

const INITIAL_STATE = {
  pokemon: null,
  loading: false,
};

export default function pokemon(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pokemon/NEW_SUCCESS': {
        draft.pokemon = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@pokemon/NEW_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@pokemon/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/DELETE_SUCCESS': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

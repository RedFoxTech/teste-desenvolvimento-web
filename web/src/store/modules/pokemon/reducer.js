import { produce } from 'immer';

const INITIAL_STATE = {
  pokemons: [],
};

export default function pokemons(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pokemons/SHOW_ALL_SUCCESS': {
        draft.pokemons = action.payload.data;
        break;
      }
      default:
    }
  });
}

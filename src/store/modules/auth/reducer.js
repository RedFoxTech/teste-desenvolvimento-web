import produce from 'immer'; 

const INITIAL_STATE = { 
    token: null
}

export default function auth(state = INITIAL_STATE, action) { 
    return produce(state, draft => { 
        switch (action.type) { 
            case '@theme/LOGIN': { 
               
                break; 
            }
            case '@auth/LOGIN_SUCCESS': { 
                draft.token = action.payload.token; 
                document.location.href = "/admin/pokemons"
                break; 
            }
            case '@auth/LOGOUT': { 
                draft.token = null; 
                document.location.href = '/login'; 
                break; 
            }
            default: 
                return state;
            
        }
    })
}
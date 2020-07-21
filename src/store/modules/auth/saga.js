import { takeLatest, all, call, put} from 'redux-saga/effects'; 
import api from 'services/api'; 

import {login_success} from './actions'; 
import history from 'services/history';

export function* login({ payload }){
    const { email, password} = payload; 

    const response = yield call( api.post, '/user/login', { 
        email, password
    });

    if ( response.status === 200) { 
        const { token } = response.data; 

        yield put(login_success(token));
        history.push('/admin/pokemons')
    }

}

export function setToken({ payload }){
    if ( !payload ) return; 

    const { token } = payload.auth; 

    if (token)
        api.defaults.headers.Authorization = token;
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/LOGIN', login)]); 
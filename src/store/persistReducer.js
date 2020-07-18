import storage from 'redux-persist/lib/storage'; 

import { persistReducer } from 'redux-persist'; 

export default reducers => { 
    const persistedReducer = persistReducer(
		{
			key: 'app',
			storage,
			whiteList: ['auth', 'user'],
		},
		reducers
	); 

    return persistedReducer; 
}
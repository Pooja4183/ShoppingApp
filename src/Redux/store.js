import {configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas/rootSaga'; // combine all sagas
import rootReducer from './reducers'; // pulls from reducers/index.js

//create saga middleware

const SagaMiddleWare = createSagaMiddleWare();

// create store
const store = configureStore({
    reducer: rootReducer, // combined reducer
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({thunk: false }).concat(SagaMiddleWare),
});

//Run root saga
SagaMiddleWare.run(rootSaga);

export default store;


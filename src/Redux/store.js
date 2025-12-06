import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas/rootSaga"; // combine all sagas
import rootReducer from "./reducers"; // pulls from reducers/index.js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//create saga middleware

const SagaMiddleWare = createSagaMiddleWare();

// 1. Redux-persisi config

const persistConfig = {
  key: "root", // key for localStorage
  storage, // default localStorage
  whitelist: ["cart", "auth", "wishList"],
};

// wrap your root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//3. create store
const store = configureStore({
  reducer: persistedReducer, // combined reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredPaths: ["pwa.event", "payload"],
        ignoredActions: [
          "persist/FLUSH",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PERSIST",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(SagaMiddleWare),
});

// 4. Run root saga
SagaMiddleWare.run(rootSaga);

// 5. Create Persistor
const persistor  = persistStore(store);


// 6. export both
export {store, persistor};

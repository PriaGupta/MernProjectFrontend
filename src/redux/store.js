import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import localForage from 'localforage';


const persistConfig = {
    key: 'root',
    storage:localForage,
  }

  const userPersistConfig={
    key:'user',
    storage: localForage,
  }
  const rootReducer= combineReducers({
    user : persistReducer(userPersistConfig, userSliceReducer),
    product : productSlideReducer,
  })


  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store= configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store)
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import map from './map/map';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage: AsyncStorage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['auth'],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
  map,
});

export const store = createStore(persistReducer(persistConfig, rootReducer));
export const persistStorage = persistStore(store);
export const accessStore = store.getState();

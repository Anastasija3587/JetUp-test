import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './info/reducers';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuth'],
};

const rootReducer = combineReducers({
  info: persistReducer(persistConfig, reducer),
});

export default rootReducer;

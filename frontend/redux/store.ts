// store.js
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'; // Storage backend
import authReducer from './reducer/login';
import loadingReducer from './reducer/loading';
import couponReducer from './reducer/payment';

// Cấu hình redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  loading : loadingReducer,
  coupon : couponReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

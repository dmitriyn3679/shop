import { combineReducers, createStore } from 'redux';
import cartReducer from '../features/cart';
import queryReducer from '../features/query';
import userReducer from '../features/user';
import alertReducer from '../features/alert';

const reducer = combineReducers({
  cart: cartReducer,
  query: queryReducer,
  user: userReducer,
  alert: alertReducer,
});

const store = createStore(reducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

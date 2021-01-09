import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import collectionsReducer from './collections/collections.reducer';
import notificationsReducer from './notifications/notifications.reducer';
import productsReducer from './products/products.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  collections: collectionsReducer,
  products: productsReducer,
  notifications: notificationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

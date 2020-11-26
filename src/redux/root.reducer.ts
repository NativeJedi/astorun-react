import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import collectionsReducer from './collections/collections.reducer';
import productsReducer from './products/products.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  collections: collectionsReducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

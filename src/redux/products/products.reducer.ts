import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  IProductsState,
  ProductsActionTypes,
} from './products.types';

const INITIAL_STATE: IProductsState = {
  products: [],
  isLoading: false,
  error: null,
  page: 1,
  pages: 2,
  total: 2,
};

const productsReducer = (
  state: IProductsState = INITIAL_STATE,
  action: ProductsActionTypes
): IProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        pages: action.payload.pages,
        isLoading: false,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;

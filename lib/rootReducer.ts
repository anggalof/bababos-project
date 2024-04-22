import { combineReducers } from '@reduxjs/toolkit';
import productListReducer from "./products/productListReducer";
import productDetailReducer from "./product/productDetailReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

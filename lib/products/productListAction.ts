import { AppThunk } from '../store';
import { TProduct } from "../../service/type";
import { SERVICES } from "../../configs";
import { fetchProductListRequest, fetchProductListSuccess, fetchProductListFailure } from './productListReducer';
import axios from 'axios';

export const fetchProductList = (): AppThunk => async (dispatch) => {
  dispatch(fetchProductListRequest());
  try {
    const response = await axios.get<TProduct>(`${SERVICES.GET_PRODUCT}/products`);
    const products = response.data;
    dispatch(fetchProductListSuccess(products));
  } catch (error: any) {
    dispatch(fetchProductListFailure(error));
  }
};


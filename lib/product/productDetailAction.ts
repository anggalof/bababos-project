import { AppThunk } from '../store';
import { TProduct } from "../../service/type";
import { SERVICES } from "../../configs";
import { fetchProductDetailRequest, fetchProductDetailSuccess, fetchProductDetailFailure } from './productDetailReducer';
import axios from 'axios';

export const fetchProductDetail  = (id: any): AppThunk => async (dispatch) => {
  dispatch(fetchProductDetailRequest());
  try {
    const response = await axios.get<TProduct>(`${SERVICES.GET_PRODUCT}/products/${id}`);
    const product = response.data;
    dispatch(fetchProductDetailSuccess(product));
  } catch (error: any) {
    dispatch(fetchProductDetailFailure(error));
  }
};


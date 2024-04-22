import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: {},
  loading: false,
  error: null,
};

const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchProductDetailRequest(state) {
      state.loading = true;
      state.error = "";
    },
    fetchProductDetailSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductDetailFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductDetailRequest, fetchProductDetailSuccess, fetchProductDetailFailure } = dataReducer.actions;

export default dataReducer.reducer;

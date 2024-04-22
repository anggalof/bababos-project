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
    fetchProductListRequest(state) {
      state.loading = true;
      state.error = "";
    },
    fetchProductListSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductListFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductListRequest, fetchProductListSuccess, fetchProductListFailure } = dataReducer.actions;

export default dataReducer.reducer;

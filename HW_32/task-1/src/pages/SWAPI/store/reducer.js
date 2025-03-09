import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
      console.log("Reducer State on Request:", state);
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("Reducer State on Success:", state);
      console.log("Reducer Data:", action.payload);
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("Reducer State on Failure:", state);
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
export default dataSlice.reducer;

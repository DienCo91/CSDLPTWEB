import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoadingSlice {
  isLoading: boolean;
}

const initialState: ILoadingSlice = {
  isLoading: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;

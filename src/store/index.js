import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPathState = {
  pop: false,
  x: "",
  location: "",
};
const pathSlice = createSlice({
  name: "path",
  initialState: initialPathState,

  reducers: {
    chnageLocation(state, action) {
      state.location = action.payload;
    },
    changePop(state, action) {
      state.pop = action.payload;
    },
    changeX(state, action) {
      state.x = action.payload;
    },
  },
});

const store = configureStore({ reducer: { path: pathSlice.reducer } });
export const pathactions = pathSlice.actions;
export default store;

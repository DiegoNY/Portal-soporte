import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    main: false,
    user: false,
    config: false,
    elementDeleted: (e: boolean) => {},
  },
  reducers: {
    changeMain: (state) => {
      state.main = !state.main;
    },
    ChangeUserMain: (state) => {
      state.user = !state.user;
    },
    changeConfig: (state) => {
      state.config = !state.config;
    },
    ChangeElementDelete: (state, action) => {
      const { ref } = action.payload;
      state.elementDeleted = ref;
    },
  },
});

export const { ChangeUserMain, changeMain, changeConfig, ChangeElementDelete } =
  navigationSlice.actions;

export default navigationSlice.reducer;

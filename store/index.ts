import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isAuthorized: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setValue: (state, { payload }) => {
      state.value = payload;
    },
    reset: (state) => {
      state.value = initialState.value;
    },
    logIn: (state) => {
      state.isAuthorized = true;
    },
    logOut: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const { setValue, reset, logOut, logIn } = mainSlice.actions;

const store = configureStore({
  reducer: mainSlice.reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserName(state, { payload }) {
      state.name = payload;
    },
  },
});

export const { setUserName } = usersSlice.actions;

export const rootReducer = usersSlice.reducer;

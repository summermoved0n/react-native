import { createSlice, isAnyOf } from "@reduxjs/toolkit";

// import { getAdvertsThunk } from "./advertsOperations";

const initialState = {
  users: {
    name: "",
    email: "",
    avatar: null,
    posts: [],
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserName(state, { payload }) {
      state.users.name = payload;
    },
  },
  extraReducers: (builder) => builder,
  // .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
  //   state.adverts.catalog = payload;
  //   state.isLoading = false;
  // })
  // .addMatcher(isAnyOf(getAdvertsThunk.pending), (state) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addMatcher(isAnyOf(getAdvertsThunk.rejected), (state, { payload }) => {
  //   state.isLoading = false;
  //   state.error = payload;
  // }),
});

export const {} = usersSlice.actions;

export const rootReducer = usersSlice.reducer;

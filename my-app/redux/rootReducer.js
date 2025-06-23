import { createSlice, isAnyOf } from "@reduxjs/toolkit";

// import { getAdvertsThunk } from "./advertsOperations";

const initialState = {
  name: "",
  email: "",
  avatar: null,
  posts: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserName(state, { payload }) {
      console.log("root", payload);
      state.users.name = payload;
    },
    setUserEmail(state, { payload }) {
      console.log("root", payload);
      state.users.email = payload;
    },
    setUserAvatar(state, { payload }) {
      console.log("root", payload);
      state.users.avatar = payload;
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

export const { setUserName, setUserEmail, setUserAvatar } = usersSlice.actions;

export const rootReducer = usersSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import darkModeSlice from "./darkMode";
import registerSlice from "./register";
import isUserLoginSlice from "./user-login";
import userProfileSlice from "./user-profile";
import userProfileImageSlice from "./user-profile-image";

// Dark Mode Slice
const darkModePersistConfig = {
  key: "root",
  storage,
};

const darkModePersistedReducer = persistReducer(
  darkModePersistConfig,
  darkModeSlice
);

// Is User Login Slice
const isUserLoginPersistConfig = {
  key: "root",
  storage,
};

const isUserLoginPersistedReducer = persistReducer(
  isUserLoginPersistConfig,
  isUserLoginSlice
);

// User Profile Slice
const userProfilePersistedConfig = {
  key: "root",
  storage,
};

const userProfilePersistedReducer = persistReducer(
  userProfilePersistedConfig,
  userProfileSlice
);

// User Profile Image Slice
const userProfileImagePersistedConfig = {
  key: "root",
  storage,
};

const userProfileImagePersistedReducer = persistReducer(
  userProfileImagePersistedConfig,
  userProfileImageSlice
);

export const store = configureStore({
  reducer: {
    darkMode: darkModePersistedReducer,
    register: registerSlice,
    isUserLogin: isUserLoginPersistedReducer,
    userProfile: userProfilePersistedReducer,
    userProfileImage: userProfileImagePersistedReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: Posts, comments: CommentsState, users: UserState  }
export type AppDispatch = typeof store.dispatch;

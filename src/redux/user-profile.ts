import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { ProfileInfoInterface } from "../types/profile-info";

const initialState = {
  userProfile: {},
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    onUserProfileChange: (
      state,
      action: PayloadAction<ProfileInfoInterface>
    ) => {
      state.userProfile = action.payload;
    },
  },
});

export const { onUserProfileChange } = userProfileSlice.actions;

export const useUserProfile = () =>
  useSelector((reducer: any) => reducer.userProfile.userProfile);

export default userProfileSlice.reducer;

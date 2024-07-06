import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  userProfileImage: "",
};

export const userProfileImageSlice = createSlice({
  name: "userProfileImage",
  initialState,
  reducers: {
    onProfileImageChange: (state, action: PayloadAction<string>) => {
      state.userProfileImage = action.payload;
    },
  },
});

export const { onProfileImageChange } = userProfileImageSlice.actions;

export const useUserProfileImage = () =>
  useSelector((reducer: any) => reducer.userProfileImage.userProfileImage);

export default userProfileImageSlice.reducer;

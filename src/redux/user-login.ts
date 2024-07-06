import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface IsUserLoginState {
  isUserLogin: boolean;
}

const initialState: IsUserLoginState = {
  isUserLogin: false,
};

export const isUserLoginSlice = createSlice({
  name: "isUserLogin",
  initialState,
  reducers: {
    isUserLoginChange: (state, action: PayloadAction<boolean>) => {
      state.isUserLogin = action.payload;
    },
  },
});

export const { isUserLoginChange } = isUserLoginSlice.actions;

export const useIsUserLogin = () =>
  useSelector((reducer: any) => reducer.isUserLogin.isUserLogin);

export default isUserLoginSlice.reducer;

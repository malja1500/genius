import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface RegisterState {
  phoneNumber: string;
  verifyCode: string;
}

const initialState: RegisterState = {
  phoneNumber: "",
  verifyCode: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    onPhoneNumberChange: (state, action) => {
      state.phoneNumber = action.payload;
    },
    onVerifyCodeChange: (state, action: PayloadAction<string>) => {
      state.verifyCode = action.payload;
    },
  },
});

export const { onPhoneNumberChange, onVerifyCodeChange } =
  registerSlice.actions;

export const useRegisterSelector = () =>
  useSelector((reducer: any) => reducer.register);

export default registerSlice.reducer;

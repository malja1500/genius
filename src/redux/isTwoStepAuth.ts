import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isTwoStepAuth: false,
};

export const isTwoStepAuthSlice = createSlice({
  name: "isTwoStepAuth",
  initialState,
  reducers: {
    isTwoStepAuthChange: (state, action: PayloadAction<boolean>) => {
      state.isTwoStepAuth = action.payload;
    },
  },
});

export const { isTwoStepAuthChange } = isTwoStepAuthSlice.actions;

export const useIsTwoStepAuth = () =>
  useSelector((reducer: any) => reducer.isTwoStepAuth.isTwoStepAuth);

export default isTwoStepAuthSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface DarkModeState {
  dark: boolean;
}

const initialState: DarkModeState = {
  dark: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    onDarkModeChange: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { onDarkModeChange } = darkModeSlice.actions;

export const useDarkModeSelector = () =>
  useSelector((reducer: any) => reducer.darkMode.dark);

export default darkModeSlice.reducer;

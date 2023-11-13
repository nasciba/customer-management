import { createSlice } from "@reduxjs/toolkit";

const industryDropdownSlice = createSlice({
  name: "industryDropdown",
  initialState: [],
  reducers: {
    setOptions(
      state: string[],
      action: { type: string; payload: string[] }
    ) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setOptions } = industryDropdownSlice.actions;

export default industryDropdownSlice;

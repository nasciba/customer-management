import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ProjectInfo, CustomerData } from "../../types/customerData";

const addNewCustomerSlice = createSlice({
  name: "newCustomer",
  initialState: {
    isActive: true,
    company: "",
    industry: "",
    about: "",
    projects: [
      {
        id: uuid(),
        name: "",
        contact: "",
        start_date: null,
        end_date: null,
      },
    ] as ProjectInfo[] | [],
  },
  reducers: {
    addCustomer(
      state: CustomerData,
      action: { type: string; payload: CustomerData }
    ) {
      Object.assign(state, action.payload);
    },
  },
});

export const { addCustomer } = addNewCustomerSlice.actions;

export default addNewCustomerSlice;

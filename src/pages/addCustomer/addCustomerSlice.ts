import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ProjectInfo, CustomerDataDto } from "../../dtos/customer-data-dto";

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
      state: CustomerDataDto,
      action: { type: string; payload: CustomerDataDto }
    ) {
      Object.assign(state, action.payload);
    },
  },
});

export const { addCustomer } = addNewCustomerSlice.actions;

export default addNewCustomerSlice;

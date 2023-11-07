import { configureStore, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { CustomerDataDto, ProjectInfo } from "../dtos/customer-data-dto";

const addNewCustomerSlice = createSlice({
  name: "newCustomer",
  initialState: {
    id: uuid(),
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

const store = configureStore({
  reducer: {
    customers: addNewCustomerSlice.reducer,
  },
});

export { store };
export const { addCustomer } = addNewCustomerSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { CustomerDataDto } from "../../dtos/customer-data-dto";

const customersListSlice = createSlice({
  name: "customerList",
  initialState: { customersList: [], filteredList: [] },
  reducers: {
    setCustomersList(
      state: {
        customersList: CustomerDataDto[];
        filteredList: CustomerDataDto[];
      },
      action: { type: string; payload: CustomerDataDto[] }
    ) {
      state.customersList = [];
      state.filteredList = [];
      Object.assign(state.customersList, action.payload);
      Object.assign(state.filteredList, action.payload);

    },
    filterCustomers(
      state: {
        customersList: CustomerDataDto[];
        filteredList: CustomerDataDto[];
      },
      action: { type: string; payload: string }
    ) {
      if (action.payload === "") {
        Object.assign(state.filteredList, state.customersList);
      } else {
        const filteredList = state.customersList.filter((customer) => {
          return customer.industry === action.payload;
        });
        state.filteredList = [];
        console.log("filteredList", filteredList);
        Object.assign(state.filteredList, filteredList);
      }
    },
  },
});

export const { setCustomersList } = customersListSlice.actions;
export const { filterCustomers } = customersListSlice.actions;

export default customersListSlice;

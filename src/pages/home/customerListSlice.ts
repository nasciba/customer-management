import { createSlice } from "@reduxjs/toolkit";
import { CustomerData } from "../../types/customerData";

const customersListSlice = createSlice({
  name: "customerList",
  initialState: { customersList: [], filteredList: [], industryDropdownValues: [] },
  reducers: {
    setCustomersList(
      state: {
        customersList: CustomerData[];
        filteredList: CustomerData[];
      },
      action: { type: string; payload: CustomerData[] }
    ) {
      state.customersList = [];
      state.filteredList = [];
      Object.assign(state.customersList, action.payload);
      Object.assign(state.filteredList, action.payload);
    },
    generateIndustryDropdown(
      state: { industryDropdownValues: string[] },
      action: { type: string; payload: CustomerData[] }
    ) {
      const dropdownValues = action.payload
        .filter(
          (
            item: CustomerData,
            index: number,
            receivedList: CustomerData[]
          ) =>
            index ===
            receivedList.findIndex(
              (listItem: CustomerData) =>
                listItem.industry.toLowerCase() === item.industry.toLowerCase()
            )
        )
        .map((item: CustomerData) => item.industry)
        .sort();
      state.industryDropdownValues = dropdownValues;
    },
    filterCustomers(
      state: {
        customersList: CustomerData[];
        filteredList: CustomerData[];
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
        Object.assign(state.filteredList, filteredList);
      }
    },
  },
});

export const { generateIndustryDropdown } = customersListSlice.actions;
export const { setCustomersList } = customersListSlice.actions;
export const { filterCustomers } = customersListSlice.actions;

export default customersListSlice;

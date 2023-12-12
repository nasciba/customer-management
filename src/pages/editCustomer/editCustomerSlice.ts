import { createSlice } from "@reduxjs/toolkit";
import { ProjectInfo, CustomerData } from "../../types/customerData";

const editCustomerSlice = createSlice({
    name: "editCustomer",
    initialState: {
      id: "",
      isActive: true,
      company: "",
      industry: "",
      about: "",
      projects: [
        {
          id: "",
          name: "",
          contact: "",
          start_date: null,
          end_date: null,
        },
      ] as ProjectInfo[] | [],
    },
    reducers: {
      editCustomer(
        state: CustomerData,
        action: { type: string; payload: CustomerData }
      ) {
        Object.assign(state, action.payload);
      },
    },
  });

  export const { editCustomer } = editCustomerSlice.actions;

  export default editCustomerSlice;
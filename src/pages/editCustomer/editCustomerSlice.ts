import { createSlice } from "@reduxjs/toolkit";
import { ProjectInfo, CustomerDataDto } from "../../dtos/customer-data-dto";

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
        state: CustomerDataDto,
        action: { type: string; payload: CustomerDataDto }
      ) {
        Object.assign(state, action.payload);
      },
    },
  });

  export const { editCustomer } = editCustomerSlice.actions;

  export default editCustomerSlice;
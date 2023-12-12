import { configureStore } from "@reduxjs/toolkit";
import addNewCustomerSlice from "../pages/addCustomer/addCustomerSlice";
import editCustomerSlice from "../pages/editCustomer/editCustomerSlice";
import customersListSlice from "../pages/home/customerListSlice";

const store = configureStore({
  reducer: {
    newCustomer: addNewCustomerSlice.reducer,
    editCustomer: editCustomerSlice.reducer,
    customers: customersListSlice.reducer
  },
})

export { store };

import { configureStore } from "@reduxjs/toolkit";
import addNewCustomerSlice from '../pages/add-customer/add-customer-slice';
import editCustomerSlice from "../pages/edit-customer/edit-customer-slice";

const store = configureStore({
  reducer: {
    newCustomer: addNewCustomerSlice.reducer,
    editCustomer: editCustomerSlice.reducer
  },
})

export { store };

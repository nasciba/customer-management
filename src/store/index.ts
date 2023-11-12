import { configureStore } from "@reduxjs/toolkit";
import addNewCustomerSlice from '../pages/addCustomer/addCustomerSlice';
import editCustomerSlice from "../pages/editCustomer/editCustomerSlice";

const store = configureStore({
  reducer: {
    newCustomer: addNewCustomerSlice.reducer,
    editCustomer: editCustomerSlice.reducer
  },
})

export { store };

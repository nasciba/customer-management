import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import addNewCustomerSlice from "../pages/addCustomer/addCustomerSlice";
import editCustomerSlice from "../pages/editCustomer/editCustomerSlice";
import customersListSlice from "../pages/home/customerListSlice";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        newCustomer: addNewCustomerSlice.reducer,
        editCustomer: editCustomerSlice.reducer,
        customers: customersListSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: Record<string, unknown>;
    store?: any;
    renderOptions?: Record<string, unknown>;
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }

  return {
    preloadedState,
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

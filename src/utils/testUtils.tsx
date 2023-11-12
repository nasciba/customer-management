import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import addNewCustomerSlice from "../pages/addCustomer/addCustomerSlice";


export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        newCustomer: addNewCustomerSlice.reducer,
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
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

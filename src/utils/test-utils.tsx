import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import addNewCustomerSlice from "../store/index";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {} as Record<string, unknown>,
    store = configureStore({
      reducer: { newCustomer: addNewCustomerSlice },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: Record<string, unknown>;
    store?: any;
    renderOptions?: Record<string, unknown>;
  } = {}
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

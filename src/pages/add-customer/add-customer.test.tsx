import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

import AddCustomer from "./add-customer";
describe("Add Customer Page", () => {
  it("should render the add customer page title", () => {
    renderWithProviders(<AddCustomer />);
    expect(
      screen.getByRole("heading", { name: "Add Customer" })
    ).toBeInTheDocument();
  });
});

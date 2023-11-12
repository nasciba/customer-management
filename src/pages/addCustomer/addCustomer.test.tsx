import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";

import AddCustomer from "./AddCustomer";
describe("Add Customer Page", () => {
  it("should render the add customer page title", () => {
    renderWithProviders(<AddCustomer />);
    expect(
      screen.getByRole("heading", { name: "Add Customer" })
    ).toBeInTheDocument();
  });
});

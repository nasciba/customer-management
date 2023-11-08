import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

import EditCustomerPage from "./edit-customer";
describe("Add Customer Page", () => {
  it("should render the add customer page title", () => {
    renderWithProviders(<EditCustomerPage />);
    expect(
      screen.getByRole("heading", { name: "Edit Customer" })
    ).toBeInTheDocument();
  });
});

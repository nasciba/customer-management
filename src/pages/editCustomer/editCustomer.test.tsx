import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";

import EditCustomerPage from "./EditCustomer";
describe("Add Customer Page", () => {
  it("should render the add customer page title", () => {
    renderWithProviders(<EditCustomerPage />);
    expect(
      screen.getByRole("heading", { name: "Edit Customer" })
    ).toBeInTheDocument();
  });
});

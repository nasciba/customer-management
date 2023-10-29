import { render, screen } from "@testing-library/react";
import AddCustomer from "./add-customer";
describe("Add Customer Page", () => {
  it("should render the add customer page title", () => {
    render(<AddCustomer />);
    expect(screen.getByRole("heading")).toHaveTextContent("Add Customer");
  });
});

/* eslint-disable testing-library/no-unnecessary-act */
import { act, screen, render } from "@testing-library/react";
import InactiveCustomers from "./inactive-customers";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  beforeEach(() => {});
  it("should render the home page title", () => {
    render(<InactiveCustomers />);
    expect(screen.getByRole("heading")).toHaveTextContent("Inactive Customers");
  });
  it("should render the customer name correctly", () => {
    render(<InactiveCustomers />);
    expect(
      screen.getByRole("columnheader", { name: "Company" })
    ).toBeInTheDocument();
  });
  it("should render the company name correctly in the table", () => {
    render(<InactiveCustomers />);
    expect(
      screen.getByRole("cell", { name: "Abbott, Olson and Moen" })
    ).toBeInTheDocument();
  });
  it("should render the industry name correctly in the table", () => {
    render(<InactiveCustomers />);
    expect(screen.getByRole("cell", { name: "Insurance" })).toBeInTheDocument();
  });
  it("should render the number of projects correctly in the table", () => {
    render(<InactiveCustomers />);
    expect(screen.getByRole("cell", { name: "3" })).toBeInTheDocument();
  });

  describe("Filtering data", () => {
    it("should render the selected option in the filter", async () => {
      render(<InactiveCustomers />);
      act(() => {
        userEvent.click(screen.getByRole("combobox", { name: "Industry" }));
      });
      act(() => {
        userEvent.click(screen.getByRole("option", { name: "travel" }));
      });
      expect(screen.getByDisplayValue("travel")).toBeInTheDocument();
    });
  });
});

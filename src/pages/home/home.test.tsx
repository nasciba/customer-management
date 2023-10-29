/* eslint-disable testing-library/no-unnecessary-act */
import { act, screen, render } from "@testing-library/react";
import Home from "./home";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  beforeEach(() => {});
  it("should render the home page title", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent("Active Customers");
  });
  it("should render the customer name correctly", () => {
    render(<Home />);
    expect(
      screen.getByRole("columnheader", { name: "Company" })
    ).toBeInTheDocument();
  });
  it("should render the company name correctly in the table", () => {
    render(<Home />);
    expect(
      screen.getByRole("cell", { name: "Doyle-Kessler" })
    ).toBeInTheDocument();
  });
  it("should render the industry name correctly in the table", () => {
    render(<Home />);
    expect(screen.getByRole("cell", { name: "Travel" })).toBeInTheDocument();
  });
  it("should render the number of projects correctly in the table", () => {
    render(<Home />);
    expect(screen.getByRole("cell", { name: "3" })).toBeInTheDocument();
  });

  it("should render a button to add a new customer with a link to redirect the user to the create user page", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: "Add Customer" })
    ).toHaveAttribute("href", "/add-customer");
  });


  describe("Filtering data", () => {
    it("should render the selected option in the filter", async () => {
      render(<Home />);
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

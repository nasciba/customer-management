import { screen, render } from "@testing-library/react";
import Home from "./home";


describe("Home Page", () => {
  beforeEach(() => {
  });
  it("should render the home page title", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent("Active Customers");
  });
  it("should render the customer name correctly", ()=> {
    render(<Home />);
    expect(screen.getByRole("columnheader", { name: "Company" })).toBeInTheDocument();
  })
 
});

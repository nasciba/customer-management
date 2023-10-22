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
  it("should render the company name correctly in the table", ()=> {
    render(<Home />);
    expect(screen.getByRole("cell", { name: "Doyle-Kessler" })).toBeInTheDocument();
  })
  it("should render the industry name correctly in the table", ()=> {
    render(<Home />);
    expect(screen.getByRole("cell", { name: "travel" })).toBeInTheDocument();
  })
  it("should render the number of projects correctly in the table", ()=> {
    render(<Home />);
    expect(screen.getByRole("cell", { name: "3" })).toBeInTheDocument();
  })
 
});

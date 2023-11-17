import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render the navbar with a link to the home page", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "" })).toHaveAttribute("href", "/");
  });
  it("should render the navbar with a title", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("heading", { name: "Customer Management" })
    ).toBeInTheDocument();
  });
});

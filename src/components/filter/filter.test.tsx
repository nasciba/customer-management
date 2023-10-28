import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "./filter";

describe("Filter", () => {
  it("should render the menu options received in the props when the user clicks on the filter", async () => {
    render(<Filter menuOptions={["option1", "option2"]} />);
    await userEvent.click(screen.getByLabelText("Industry"))
    expect(screen.getByRole("option", { name: "option1" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "option2" })).toBeInTheDocument();
  });
  it("should show the selected option in the filter", async () => {
    render(<Filter menuOptions={["option1", "option2"]} />);
    await userEvent.click(screen.getByLabelText("Industry"))
    await userEvent.click(screen.getByRole("option", { name: "option1" }))
    expect(screen.getByDisplayValue("option1")).toBeInTheDocument();
  })
});
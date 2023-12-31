import Dialog from "./dialog";
import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Dialog", () => {
  const handleClose = jest.fn();
  const handleSubmit = jest.fn();
  const dialogProps = {
    open: true,
    title: "Some title",
    text: "Some text",
    handleClose: handleClose,
    handleSubmit: handleSubmit,
  };

  it("should render a title", () => {
    render(<Dialog {...dialogProps} />);
    expect(
      screen.getByRole("heading", { name: "Some title" })
    ).toBeInTheDocument();
  });
  it("should render a text", () => {
    render(<Dialog {...dialogProps} />);
    expect(screen.getByText("Some text")).toBeInTheDocument();
  });
  it("should call handleClose when the cancel button is clicked", () => {
    render(<Dialog {...dialogProps} />);
    userEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(handleClose).toHaveBeenCalled();
  });

  it("should call handleSubmit when the confirm button is clicked", async () => {
    render(<Dialog {...dialogProps} />);
    userEvent.click(screen.getByRole("button", { name: "Confirm" }));
    expect(handleSubmit).toHaveBeenCalled();
  });
});

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "./filter";

describe("Filter", () => {
  const setOptionMock = jest.fn();
  const selectOptionsMock = ["Travel", "Insurance"];
  it("should render a filter with the label Industry", () => {
    render(
      <Filter
        selectOptions={selectOptionsMock}
        handleChange={setOptionMock}
        selectedOption=""
        label="Industry"
        displayAllOptions={true}
      />
    );
    const filterLabel = screen.getByLabelText("Industry");
    expect(filterLabel).toBeInTheDocument();
  });
  it("should render the menu options received in the props when the user clicks on the filter", () => {
    render(
      <Filter
        selectOptions={selectOptionsMock}
        handleChange={setOptionMock}
        selectedOption=""
        label="Industry"
        displayAllOptions={true}
      />
    );
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(screen.getByRole("combobox", { name: "Industry" }));
    });
    expect(screen.getByRole("option", { name: "Travel" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Insurance" })
    ).toBeInTheDocument();
  });
});

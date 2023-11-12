/* eslint-disable testing-library/no-unnecessary-act */
import Project from "./ProjectDetails";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Projects Component", () => {
  const onChangeMock = jest.fn();
  const handleDateChangeMock = jest.fn();
  const handleRemoveProject = jest.fn();

  const projectMock = {
    id: "some-id",
    name: "some-name",
    contact: null,
    start_date: null,
    end_date: null,
  };
  it("should call the onchange function when the user types the project name", () => {
    render(
      <Project
        project={projectMock}
        handleChangeProject={onChangeMock}
        handleDateChange={handleDateChangeMock}
        handleRemoveProject={handleRemoveProject}
        index={0}
      />
    );
    const nameInput = screen.getByRole("textbox", { name: "Name" });
    act(() => userEvent.type(nameInput, "some-name"));
    expect(onChangeMock).toHaveBeenCalled();
  });
  it("should call the onchange function when the user types the project contact", () => {
    render(
      <Project
        project={projectMock}
        handleChangeProject={onChangeMock}
        handleDateChange={handleDateChangeMock}
        handleRemoveProject={handleRemoveProject}
        index={0}
      />
    );
    const contactInput = screen.getByRole("textbox", { name: "Contact" });
    act(() => userEvent.type(contactInput, "some-contact"));
    expect(onChangeMock).toHaveBeenCalled();
  });
  it("should render an empty string when the project contact does not exist", () => {
    render(
      <Project
        project={projectMock}
        handleChangeProject={onChangeMock}
        handleDateChange={handleDateChangeMock}
        handleRemoveProject={handleRemoveProject}
        index={0}
      />
    );
    expect(screen.getByRole("textbox", { name: "Contact" })).toHaveValue("");
  });
  it("should call the onchange function when a date is typed in the start date field", () => {
    render(
      <Project
        project={projectMock}
        handleChangeProject={onChangeMock}
        handleDateChange={handleDateChangeMock}
        handleRemoveProject={handleRemoveProject}
        index={0}
      />
    );
    const startDateInput = screen.getByRole("textbox", { name: "Start Date" });
    act(() => userEvent.type(startDateInput, "01/10/2023"));
    expect(handleDateChangeMock).toHaveBeenCalled();
  });
  it("should call the onchange function when a date is typed in the end date field", () => {
    render(
      <Project
        project={projectMock}
        handleChangeProject={onChangeMock}
        handleDateChange={handleDateChangeMock}
        handleRemoveProject={handleRemoveProject}
        index={0}
      />
    );
    const endDateInput = screen.getByRole("textbox", { name: "End Date" });
    act(() => userEvent.type(endDateInput, "01/11/2023"));
    expect(handleDateChangeMock).toHaveBeenCalled();
  });
  it("should call the handleRemoveProject function when the remove button is clicked", () => {
    render(
      <Project
        project={projectMock}
        handleChangeProject={onChangeMock}
        handleDateChange={handleDateChangeMock}
        handleRemoveProject={handleRemoveProject}
        index={0}
      />
    );
    const removeButton = screen.getByRole("button", { name: "Remove" });
    act(() => userEvent.click(removeButton));
    expect(handleRemoveProject).toHaveBeenCalled();
  });
});

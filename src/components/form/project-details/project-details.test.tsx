import Project from "./project-details";
import { render, screen } from "@testing-library/react";

describe("Projects Component", () => {
  const onChangeMock = jest.fn();
  const handleDateChangeMock = jest.fn()
  const projectMock = {
    id: "some-id",
    name: "some-description",
    contact: "some-contact",
    start_date: "2021-10-26T03:45:04Z",
    end_date: "2022-06-16T16:27:29Z",
  };
  it("should render a field for the project name", () => {
    render(
      <Project project={projectMock} handleProject={onChangeMock} handleDateChange={handleDateChangeMock} index={0} />
    );
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
  });
  it("should render a field for the project contact", () => {
    render(
      <Project project={projectMock} handleProject={onChangeMock} handleDateChange={handleDateChangeMock} index={0} />
    );
    expect(
      screen.getByRole("textbox", { name: "Contact" })
    ).toBeInTheDocument();
  });
  it("should render an empty string when the project contact does not exist", () => {
    render(
      <Project project={projectMock} handleProject={onChangeMock} handleDateChange={handleDateChangeMock} index={0} />
    );
    expect(screen.getByRole("textbox", { name: "Contact" })).toHaveValue("");
  });
  it("should render a field for the project start date", () => {
    render(
      <Project project={projectMock} handleProject={onChangeMock} handleDateChange={handleDateChangeMock} index={0} />
    );
    expect(
      screen.getByRole("textbox", { name: "Start Date" })
    ).toBeInTheDocument();
  });
});

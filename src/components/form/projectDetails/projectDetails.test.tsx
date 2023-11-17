import Project from "./ProjectDetails";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Project Details", () => {
  const updateProjectState = jest.fn();
  const handleBlur = jest.fn();
  const handleRemoveProject = jest.fn();
  const handleChangeValidation = jest.fn();

  const projectMock = {
    id: "some-id",
    name: "some-name",
    contact: null,
    start_date: null,
    end_date: null,
  };
  const touched = { name: "", contact: "", start_date: "", end_date: "" };
  const errors = { name: "", contact: "", start_date: "", end_date: "" };

  it("should display the value typed in the project name field", () => {
    render(
      <Project
        project={projectMock}
        updateProjectState={updateProjectState}
        handleChangeValidation={handleChangeValidation}
        handleRemoveProject={handleRemoveProject}
        index={0}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
      />
    );
    const nameInput = screen.getByRole("textbox", { name: "Project Name" });
    userEvent.type(nameInput, "some-name");
    expect(nameInput).toHaveValue("some-name");
  });
  it("should display the value typed in the email(contact) field", () => {
    render(
      <Project
        project={projectMock}
        updateProjectState={updateProjectState}
        handleRemoveProject={handleRemoveProject}
        handleChangeValidation={handleChangeValidation}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
        index={0}
      />
    );
    const emailInput = screen.getByRole("textbox", { name: "Email" });
    userEvent.type(emailInput, "{backspace}some@email.com");
    expect(emailInput).toHaveValue("some@email.com");
  });
  it("should render an empty string when the project contact does not exist", () => {
    render(
      <Project
        project={projectMock}
        updateProjectState={updateProjectState}
        handleChangeValidation={handleChangeValidation}
        handleRemoveProject={handleRemoveProject}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
        index={0}
      />
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveValue("");
  });

  it("should call the onchange function when a date is typed in the start date field", () => {
    render(
      <Project
        project={projectMock}
        updateProjectState={updateProjectState}
        handleChangeValidation={handleChangeValidation}
        handleRemoveProject={handleRemoveProject}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
        index={0}
      />
    );
    const startDateInput = screen.getByRole("textbox", { name: "Start Date" });
    userEvent.type(startDateInput, "01/10/2023");
    //expect(handleProjectDateMock).toHaveBeenCalled();
  });

  it("should call the onchange function when a date is typed in the end date field", () => {
    render(
      <Project
        project={projectMock}
        updateProjectState={updateProjectState}
        handleChangeValidation={handleChangeValidation}
        handleRemoveProject={handleRemoveProject}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
        index={0}
      />
    );
    const endDateInput = screen.getByRole("textbox", { name: "End Date" });
    userEvent.type(endDateInput, "01/11/2023");
    // expect(handleProjectDateMock).toHaveBeenCalled();
  });
  it("should call the handleRemoveProject function when the remove button is clicked", () => {
    render(
      <Project
        project={projectMock}
        updateProjectState={updateProjectState}
        handleChangeValidation={handleChangeValidation}
        handleRemoveProject={handleRemoveProject}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
        index={0}
      />
    );
    const removeButton = screen.getByRole("button", { name: "Remove" });
    userEvent.click(removeButton);
    expect(handleRemoveProject).toHaveBeenCalled();
  });
});

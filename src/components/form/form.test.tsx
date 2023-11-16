/* eslint-disable testing-library/no-unnecessary-act */
import { act, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";
import { CustomerData } from "../../types/customerData";
import userEvent from "@testing-library/user-event";

describe("Form Component", () => {
  const handleChangeMock = jest.fn();
  const handleSubmitMock = jest.fn();

  const customerDataMock: CustomerData = {
    id: "some-id",
    isActive: true,
    company: "Mercedes Benz",
    industry: "Auto",
    about: "Auto company",
    projects: [],
  };

  it("should call the handle change function when an input is typed in the company field", () => {
    handleChangeMock.mockImplementation(() => {});
    renderWithProviders(
      <Form
        customerInfo={customerDataMock}
        reducer={handleChangeMock}
        handleSubmit={handleSubmitMock}
      />
    );

    userEvent.type(screen.getByRole("textbox", { name: "Company" }), "some-company");
    expect(handleChangeMock).toHaveBeenCalled();
  });
  it("should render a field for the industry name", () => {
    renderWithProviders(
      <Form
        customerInfo={customerDataMock}
        reducer={handleChangeMock}
        handleSubmit={handleSubmitMock}
      />
    );
    expect(
      screen.getByRole("textbox", { name: "Industry" })
    ).toBeInTheDocument();
  });
  it("should render a field for the about text", () => {
    renderWithProviders(
      <Form
        customerInfo={customerDataMock}
        reducer={handleChangeMock}
        handleSubmit={handleSubmitMock}
      />
    );
    expect(screen.getByRole("textbox", { name: "About" })).toBeInTheDocument();
  });
  describe("Projects section", () => {
    it("should render a title for the projects section", () => {
      renderWithProviders(
        <Form
          customerInfo={customerDataMock}
          reducer={handleChangeMock}
          handleSubmit={handleSubmitMock}
        />
      );
      expect(
        screen.getByRole("heading", { name: "Projects" })
      ).toBeInTheDocument();
    });
  });
});

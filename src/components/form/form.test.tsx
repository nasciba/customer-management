import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";
import { CustomerData } from "../../types/customerData";

describe("Form Component", () => {
  const reducerMock = jest.fn();
  const handleSubmitMock = jest.fn();

  const customerDataMock: CustomerData = {
    id: "",
    isActive: true,
    company: "",
    industry: "",
    about: "",
    projects: [],
  };
  describe("When the input values are changed", () => {
    beforeEach(() => {
      reducerMock.mockImplementation(() => ({
        type: "newCustomer/addCustomer",
        payload: {
          id: "1234567",
          isActive: true,
          company: "Some company",
          industry: "Tech",
          about: "Some description detailing the company activities",
          projects: [],
        },
      }));
    });
    it("should call the handle change function when a value is typed in the company field", async () => {
      renderWithProviders(
        <Form
          customerData={customerDataMock}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );

      userEvent.type(
        screen.getByRole("textbox", { name: "Company" }),
        "Some company"
      );

      expect(reducerMock).toHaveBeenCalled();
    });
    it("should call the handle change function when a value is typed in the industry field", async () => {
      renderWithProviders(
        <Form
          customerData={customerDataMock}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );

      userEvent.type(
        await screen.findByRole("textbox", { name: "Industry" }),
        "Tech"
      );

      expect(reducerMock).toHaveBeenCalled();
    });
    it("should mark the checkbox as checked when the isActive field is true", () => {
      renderWithProviders(
        <Form
          customerData={customerDataMock}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );

      userEvent.click(
        screen.getByRole("checkbox", { name: "Active Customer" })
      );

      expect(
        screen.getByRole("checkbox", { name: "Active Customer" })
      ).toBeChecked();
    });
    it("should call the handle change function when a value is typed in the about field", () => {
      renderWithProviders(
        <Form
          customerData={customerDataMock}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );

      userEvent.type(
        screen.getByRole("textbox", { name: "About" }),
        "Some description detailing the company activities"
      );

      expect(reducerMock).toHaveBeenCalled();
    });
  });

  describe("Projects section", () => {
    beforeEach(() => {
      reducerMock.mockImplementation(() => ({
        type: "newCustomer/addCustomer",
        payload: {
          id: "1234567",
          isActive: true,
          company: "Some company",
          industry: "Tech",
          about: "Some description detailing the company activities",
          projects: [],
        },
      }));
    });
    it("should render a title for the projects section", () => {
      renderWithProviders(
        <Form
          customerData={customerDataMock}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );
      expect(
        screen.getByRole("heading", { name: "Projects" })
      ).toBeInTheDocument();
    });
    it("should add a project when the Add Project button is clicked", () => {
      const updatedCustomerData: CustomerData = {
        ...customerDataMock,
        projects: [
          {
            contact: "",
            end_date: null,
            id: expect.anything(),
            name: "",
            start_date: null,
          },
        ],
      };
      renderWithProviders(
        <Form
          customerData={customerDataMock}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );
      userEvent.click(screen.getByRole("button", { name: "Add Project" }));
      expect(reducerMock).toHaveBeenCalledWith(updatedCustomerData);
    });
    it("should call the reducer to delete a project when the delete button is clicked", () => {
      const customerData: CustomerData = {
        ...customerDataMock,
        projects: [
          {
            contact: "",
            end_date: null,
            id: expect.anything(),
            name: "",
            start_date: null,
          },
        ],
      };
      renderWithProviders(
        <Form
          customerData={customerData}
          reducer={reducerMock}
          handleSubmit={handleSubmitMock}
        />
      );
      userEvent.click(screen.getByRole("button", { name: "Remove" }));
      expect(reducerMock).toHaveBeenCalledWith({
        id: "",
        isActive: true,
        company: "",
        industry: "",
        about: "",
        projects: [],
      });
    });
  });
});

/* eslint-disable testing-library/no-unnecessary-act */
import { act, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import addNewCustomerService from "../../service/addNewCustomer";
import userEvent from "@testing-library/user-event";
import AddCustomer from "./AddCustomer";

jest.mock("../../service/addNewCustomer");

describe("Add Customer Page", () => {
  const stateMock = {
    newCustomer: {
      id: "1234567",
      isActive: true,
      company: "Some company",
      industry: "Tech",
      about: "Some description",
      projects: [
        {
          id: "abcde1234",
          name: "Automation",
          contact: "John Doe ",
          start_date: "2021-10-26T03:45:04Z",
          end_date: "2021-11-26T03:45:04Z",
        },
      ],
    },
  };

  it("should render the add customer page title", () => {
    renderWithProviders(<AddCustomer />);
    expect(
      screen.getByRole("heading", { name: "Add Customer" })
    ).toBeInTheDocument();
  });

  it("should call the edit customer service when the form is submitted", async () => {
    (addNewCustomerService as jest.Mock).mockImplementation(() => {});
    renderWithProviders(<AddCustomer />, { preloadedState: stateMock });
    const submitButton = await screen.findByRole("button", { name: "Submit" });
    act(() => userEvent.click(submitButton));
    expect(addNewCustomerService).toHaveBeenCalledWith({
      id: "1234567",
      isActive: true,
      company: "Some company",
      industry: "Tech",
      about: "Some description",
      projects: [
        {
          id: "abcde1234",
          name: "Automation",
          contact: "John Doe ",
          start_date: "2021-10-26T03:45:04Z",
          end_date: "2021-11-26T03:45:04Z",
        },
      ],
    });
  });
});

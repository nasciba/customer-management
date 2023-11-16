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
      company: "",
      industry: "",
      about: "",
      projects: [
        {
          id: "abcde1234",
          name: "",
          contact: "",
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


  it("should display an error message when the request to add the customer info fails", async () => {
    (addNewCustomerService as jest.Mock).mockImplementation(() => {
      throw new Error();
    });
    renderWithProviders(<AddCustomer />, { preloadedState: stateMock });

    act(() =>
      userEvent.type(
        screen.getByRole("textbox", { name: /company/i }),
        "Some company"
      )
    );

    act(() =>
      userEvent.type(screen.getByRole("textbox", { name: /industry/i }), "Tech")
    );

    act(() =>
      userEvent.type(
        screen.getByRole("textbox", { name: /about/i }),
        "Some description detailing the company activity"
      )
    );

    act(() =>
      userEvent.type(
        screen.getByRole("textbox", { name: /about/i }),
        "Some description detailing the company activity"
      )
    );

    act(() =>
      userEvent.type(
        screen.getByRole("textbox", { name: /name/i }),
        "Automation"
      )
    );

    act(() =>
      userEvent.type(
        screen.getByRole("textbox", { name: /email/i }),
        "test@test.com"
      )
    );

    act(() => userEvent.click(screen.getByRole("button", { name: /Submit/i })));

    expect(
      await screen.findByRole("heading", { name: "Something went wrong." })
    ).toBeInTheDocument();
  }, 15000);
});

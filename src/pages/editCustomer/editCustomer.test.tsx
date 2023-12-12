import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import EditCustomerPage from "./EditCustomer";
import getUserByIdService from "../../service/getCustomer";

jest.mock("../../service/getCustomer");

describe("Edit Customer Page", () => {
  const stateMock = {
    editCustomer: {
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

  beforeEach(() => {
    jest.clearAllMocks();
    (getUserByIdService as jest.Mock).mockImplementation(
      () => stateMock.editCustomer
    );
  });
  it("should render the add customer page title", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(
      await screen.findByRole("heading", { name: "Edit Customer" })
    ).toBeInTheDocument();
  });
  it("should render the customer name retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(await screen.findByDisplayValue("Some company")).toBeInTheDocument();
  });
  it("should render the customer industry retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(await screen.findByDisplayValue("Tech")).toBeInTheDocument();
  });
  it("should render the customer about retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(
      await screen.findByDisplayValue("Some description")
    ).toBeInTheDocument();
  });
  it("should render the customer project name retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(await screen.findByDisplayValue("Automation")).toBeInTheDocument();
  });
  it("should render the customer project contact retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(await screen.findByDisplayValue("John Doe")).toBeInTheDocument();
  });
  it("should render the customer project start date retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(await screen.findByDisplayValue("10/26/2021")).toBeInTheDocument();
  });
  it("should render the customer project end date retrieved", async () => {
    renderWithProviders(<EditCustomerPage />, { preloadedState: stateMock });
    expect(await screen.findByDisplayValue("11/26/2021")).toBeInTheDocument();
  });
});

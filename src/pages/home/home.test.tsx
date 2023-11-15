/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import Home from "./Home";
import { renderWithProviders } from "../../utils/testUtils";
import useFilterCustomers from "./useFilterCustomer";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.mock("../../hooks/useFilterCustomer");

describe("Home Page", () => {
  const deleteCustomerFromDbMock = jest.fn();
  const setIndustryMock = jest.fn();
  const setCustomerMock = jest.fn();
  const useFilterCustomersMock = {
    isLoading: false,
    hasError: false,
    selectedCustomer: "Active",
    selectedIndustry: "",
    setCustomer: setCustomerMock,
    setIndustry: setIndustryMock,
    deleteCustomerFromDb: deleteCustomerFromDbMock,
  };
  const activeCustomers = [
    {
      id: "1798e668-8eb3-424f-8af7-6e6da2515b14",
      isActive: true,
      company: "Doyle-Kessler",
      industry: "travel",
      projects: [
        {
          id: "e25fc621-1aed-4898-9714-090f300c75c8",
          name: "Grass-roots",
          contact: "fsimony1@hostgator.com",
          start_date: "2021-10-05T07:33:02Z",
          end_date: "2022-05-30T10:40:32Z",
        },
        {
          id: "64c726d0-c9a2-4a8f-a775-4340da21c721",
          name: "dynamic",
          contact: "lallibon2@bloglines.com",
          start_date: "2022-01-05T11:54:14Z",
          end_date: "2022-03-31T17:50:50Z",
        },
        {
          id: "fa93c65a-0433-479f-bcaa-27fab7b5c57d",
          name: "Ergonomic",
          contact: "shyslop3@usatoday.com",
          start_date: "2021-12-03T22:51:58Z",
          end_date: null,
        },
      ],
      about:
        "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    },
    {
      id: "ea8294be-562d-4196-9329-79560ce84a5e",
      isActive: true,
      company: "Bahringer, Rice and Dach",
      industry: "marketing",
      projects: [
        {
          id: "1707b182-2bf7-45c2-874f-7cfa63c6d6b7",
          name: "Automated",
          contact: "kphillpotts6@sina.com.cn",
          start_date: "2021-11-07T11:23:23Z",
          end_date: null,
        },
      ],
      about: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    },
  ];
  const inactiveCustomers = [
    {
      id: "1798e668-8eb3-424f-8af7-6e6da2515b14",
      isActive: false,
      company: "Doyle-Kessler",
      industry: "travel",
      projects: [
        {
          id: "e25fc621-1aed-4898-9714-090f300c75c8",
          name: "Grass-roots",
          contact: "fsimony1@hostgator.com",
          start_date: "2021-10-05T07:33:02Z",
          end_date: "2022-05-30T10:40:32Z",
        },
      ],
      about: "Some description",
    },
    {
      id: "ea8294be-562d-4196-9329-79560ce84a5e",
      isActive: false,
      company: "Bahringer, Rice and Dach",
      industry: "marketing",
      projects: [
        {
          id: "1707b182-2bf7-45c2-874f-7cfa63c6d6b7",
          name: "Automated",
          contact: "kphillpotts6@sina.com.cn",
          start_date: "2021-11-07T11:23:23Z",
          end_date: null,
        },
      ],
      about: "Test decription",
    },
  ];

  const stateMock = {
    customers: {
      customersList: activeCustomers,
      filteredList: activeCustomers,
    },
  };
  describe("When the request to get the customers list is successful", () => {
    beforeEach(() => {
      (useFilterCustomers as jest.Mock).mockImplementation(
        () => useFilterCustomersMock
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should render the home page title", async () => {
      renderWithProviders(<Home />);

      expect(await screen.findByRole("heading")).toHaveTextContent("Customers");
    });

    it("should render a table with a column to display the company name", () => {
      renderWithProviders(<Home />);
      const tableColumn = screen.getByRole("columnheader", { name: "Company" });
      expect(tableColumn).toBeInTheDocument();
    });
    it("should render a table with a column to display the industry", () => {
      renderWithProviders(<Home />);
      const tableColumn = screen.getByRole("columnheader", {
        name: "Industry",
      });
      expect(tableColumn).toBeInTheDocument();
    });
    it("should render a table with a column to display the number of projects", () => {
      renderWithProviders(<Home />);
      const tableColumn = screen.getByRole("columnheader", {
        name: "Projects",
      });
      expect(tableColumn).toBeInTheDocument();
    });
    it("should render a table with a column to display information about the customer", () => {
      renderWithProviders(<Home />);
      const tableColumn = screen.getByRole("columnheader", { name: "About" });
      expect(tableColumn).toBeInTheDocument();
    });
    it("should render a table with a column to display the about section", () => {
      renderWithProviders(<Home />);
      const tableColumn = screen.getByRole("columnheader", { name: "Actions" });
      expect(tableColumn).toBeInTheDocument();
    });
    it("should render the customer name correctly", async () => {
      renderWithProviders(<Home />, { preloadedState: stateMock });

      expect(
        await screen.findByRole("columnheader", { name: "Company" })
      ).toBeInTheDocument();
    });
    it("should render the company name correctly in the table", async () => {
      renderWithProviders(<Home />, { preloadedState: stateMock });

      expect(
        await screen.findByRole("cell", { name: "Doyle-Kessler" })
      ).toBeInTheDocument();
    });
    it("should render the industry name correctly in the table", async () => {
      renderWithProviders(<Home />, { preloadedState: stateMock });

      expect(
        await screen.findByRole("cell", { name: "Travel" })
      ).toBeInTheDocument();
    });
    it("should render the number of projects correctly in the table", async () => {
      renderWithProviders(<Home />, { preloadedState: stateMock });

      expect(
        await screen.findByRole("cell", { name: "1" })
      ).toBeInTheDocument();
    });

    it("should render a button to add a new customer with a link to redirect the user to the create customer page", async () => {
      renderWithProviders(<Home />);

      expect(
        await screen.findByRole("link", { name: "Add Customer" })
      ).toHaveAttribute("href", "/add-customer");
    });
    it("should render a button to edit a customer with a link to redirect the user to the edit page", async () => {
      renderWithProviders(<Home />, {
        preloadedState: {
          customers: {
            customersList: activeCustomers,
            filteredList: activeCustomers,
          },
        },
      });
      const editButton = await screen.findAllByRole("link", { name: /edit/i });

      expect(editButton[0]).toHaveAttribute(
        "href",
        "/edit-customer/1798e668-8eb3-424f-8af7-6e6da2515b14"
      );
    });

    it("should call the deleteCustomerFromDb function when the user clicks on the delete button to remove an inactive customer", async () => {
      renderWithProviders(<Home />, {
        preloadedState: {
          customers: {
            customersList: inactiveCustomers,
            filteredList: inactiveCustomers,
          },
        },
      });
      const deleteButton = await screen.findAllByRole("button", {
        name: /delete/i,
      });
      act(() => userEvent.click(deleteButton[0]));
      expect(deleteCustomerFromDbMock).toHaveBeenCalled();
    });

    describe("Filters", () => {
      it("should render a filter with the default value Active to filter customers", async () => {
        renderWithProviders(<Home />);
        const customerFilter = await screen.findByDisplayValue("Active");
        expect(customerFilter).toBeInTheDocument();
      });
      it("should render a filter for Industry", async () => {
        renderWithProviders(<Home />);
        const industryFilter = await screen.findByLabelText("Industry");
        expect(industryFilter).toBeInTheDocument();
      });
    });
  });
  describe("When the request to get the customers list fails", () => {
    const errorMock = { ...useFilterCustomersMock, hasError: true };
    beforeEach(() => {
      (useFilterCustomers as jest.Mock).mockImplementation(() => errorMock);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should render an error message", async () => {
      renderWithProviders(<Home />);
      expect(
        await screen.findByText("Something went wrong.")
      ).toBeInTheDocument();
    });
  });
  describe("When the request to get the customers list is in progress", () => {
    const loadingMock = { ...useFilterCustomersMock, isLoading: true };
    beforeEach(() => {
      (useFilterCustomers as jest.Mock).mockImplementation(() => loadingMock);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should render a loading spinner", async () => {
      renderWithProviders(<Home />);
      expect(await screen.findByRole("progressbar")).toBeInTheDocument();
    });
  });
});

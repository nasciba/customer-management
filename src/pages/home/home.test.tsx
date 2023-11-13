/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render } from "@testing-library/react";
import Home from "./Home";
import getAllCustomers from "../../service/getCustomers";

jest.mock("../../service/get-customers");

describe("Home Page", () => {
  describe("When the request to get the customers list is successful", () => {
    const responseMock = [
      {
        id: "40c0bad7-f1a6-4173-bd44-7ebef044905d",
        isActive: false,
        company: "Abbott, Olson and Moen",
        industry: "insurance",
        projects: [
          {
            id: "69812942-9b25-4eb1-8fe2-7b3709f9b29e",
            name: "User-friendly",
            contact: "ldodamead0@wikipedia.org",
            start_date: "2021-10-26T03:45:04Z",
            end_date: "2022-06-16T16:27:29Z",
          },
        ],
        about:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      },
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
        ],
      },
    ];
    beforeEach(() => {
      (getAllCustomers as jest.Mock).mockResolvedValue(responseMock);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should call the getAllCustomers function to populate the table when the page is rendered", async () => {
      render(<Home />);
  
      expect(getAllCustomers).toHaveBeenCalled();
    });
    it("should render the home page title", async () => {
      render(<Home />);
  
      expect(await screen.findByRole("heading")).toHaveTextContent("Customers");
    });
    it("should render the customer name correctly", async () => {
      render(<Home />);
  
      expect(
        await screen.findByRole("columnheader", { name: "Company" })
      ).toBeInTheDocument();
    });
    it("should render the company name correctly in the table", async () => {
      render(<Home />);
  
      expect(
        await screen.findByRole("cell", { name: "Doyle-Kessler" })
      ).toBeInTheDocument();
    });
    it("should render the industry name correctly in the table", async () => {
      render(<Home />);
  
      expect(
        await screen.findByRole("cell", { name: "Travel" })
      ).toBeInTheDocument();
    });
    it("should render the number of projects correctly in the table", async () => {
      render(<Home />);
  
      expect(await screen.findByRole("cell", { name: "1" })).toBeInTheDocument();
    });
  
    it("should render a button to add a new customer with a link to redirect the user to the create user page", async () => {
      render(<Home />);
  
      expect(
        await screen.findByRole("link", { name: "Add Customer" })
      ).toHaveAttribute("href", "/add-customer");
    });
  
    describe("Filters", () => {
      it("should render a filter with the default value Active to filter customers", async () => {
        render(<Home />);
        const customerFilter = await screen.findByDisplayValue("Active");
        expect(customerFilter).toBeInTheDocument();
      });
      it("should render a filter for Industry", async () => {
        render(<Home />);
        const industryFilter = await screen.findByLabelText("Industry")
   
        expect(industryFilter).toBeInTheDocument();
      });
    });
  })
  describe("When the request to get the customers list fails", () => {
    beforeEach(() => {
      (getAllCustomers as jest.Mock).mockRejectedValue(new Error("Error"));
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should render an error message", async () => {
      render(<Home />);
      expect(await screen.findByText("Something went wrong.")).toBeInTheDocument();
    });
  })
  describe("When the request to get the customers list is in progress", () => {
    beforeEach(() => {
      (getAllCustomers as jest.Mock).mockResolvedValue(new Promise(() => {}));
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should render a loading spinner", async () => {
      render(<Home />);
      expect(await screen.findByRole("progressbar")).toBeInTheDocument();
    });
  })


});

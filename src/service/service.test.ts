import addNewCustomer from "./add-new-customer";
import getAllCustomers from "./get-customers";
import editCustomerService from "./edit-customer";
import deleteCustomer from "./delete-customer";
import getCustomerById from "./get-customer";
import axios from "axios";

jest.mock("axios");
describe("Service", () => {
  describe("getCustomers", () => {
    const customersResponse = [
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
    ];

    beforeEach(() => {
      (axios.get as jest.Mock).mockResolvedValue({ data: customersResponse });
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should call axios with the right endpoint to get all customers", async () => {
      await getAllCustomers();
      expect(axios.get).toHaveBeenCalledWith(
        `${process.env.REACT_APP_REACT_APP_PORT_SERVER}/customers`
      );
    });
    it("should return the customer data from the response", async () => {
      const response = await getAllCustomers();
      expect(response).toEqual(customersResponse);
    });
  });
  describe("getCustomerById", () => {
    const customerResponse = {
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
    };

    beforeEach(() => {
      (axios.get as jest.Mock).mockResolvedValue({ data: customerResponse });
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should call axios with the right endpoint to get all customers", async () => {
      await getCustomerById("40c0bad7-f1a6-4173-bd44-7ebef044905d");
      expect(axios.get).toHaveBeenCalledWith(
        `${process.env.REACT_APP_REACT_APP_PORT_SERVER}/customers/40c0bad7-f1a6-4173-bd44-7ebef044905d`
      );
    });
    it("should return the customer data from the response", async () => {
      const response = await getCustomerById(
        "40c0bad7-f1a6-4173-bd44-7ebef044905d"
      );
      expect(response).toEqual(customerResponse);
    });
  });

  describe("addNewCustomer", () => {
    const requestMock = {
      id: "40c0bad7-f1a6-4173-bd44-7ebef044905d",
      isActive: true,
      company: "Some Company",
      industry: "insurance",
      projects: [
        {
          id: "69812942-9b25-4eb1-8fe2-7b3709f9b29e",
          name: "Some name",
          contact: "ldodamead0@wikipedia.org",
          start_date: "2021-10-26T03:45:04Z",
          end_date: "2022-06-16T16:27:29Z",
        },
      ],
      about: "Some description",
    };

    beforeEach(() => {
      (axios.post as jest.Mock).mockResolvedValue({});
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should call axios with the request body", async () => {
      await addNewCustomer(requestMock);
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.REACT_APP_REACT_APP_PORT_SERVER}/customers`,
        { body: requestMock }
      );
    });
  });
  describe("editCustomerService", () => {
    const requestMock = {
      id: "40c0bad7-f1a6-4173-bd44-7ebef044905d",
      isActive: true,
      company: "Some Company",
      industry: "insurance",
      projects: [
        {
          id: "69812942-9b25-4eb1-8fe2-7b3709f9b29e",
          name: "Some name",
          contact: "ldodamead0@wikipedia.org",
          start_date: "2021-10-26T03:45:04Z",
          end_date: "2022-06-16T16:27:29Z",
        },
      ],
      about: "Some description",
    };

    beforeEach(() => {
      (axios.put as jest.Mock).mockResolvedValue({});
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should call axios with the request body", async () => {
      await editCustomerService("40c0bad7-f1a6-4173-bd44-7ebef044905d", requestMock);
      expect(axios.put).toHaveBeenCalledWith(
        `${process.env.REACT_APP_PORT_SERVER}/customers/40c0bad7-f1a6-4173-bd44-7ebef044905d`,
        { body: requestMock }
      );
    });
  });
  describe("deleteCustomer", () => {
    beforeEach(() => {
      (axios.delete as jest.Mock).mockResolvedValue({});
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should call axios with the right endpoint to get all customers", async () => {
      await deleteCustomer("40c0bad7-f1a6-4173-bd44-7ebef044905d");
      expect(axios.delete).toHaveBeenCalledWith(
        `${process.env.REACT_APP_PORT_SERVER}/customers/40c0bad7-f1a6-4173-bd44-7ebef044905d`
      );
    });
  });
});

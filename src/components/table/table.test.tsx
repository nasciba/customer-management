import Table from "./table";
import { screen, render } from "@testing-library/react";

describe("Table", () => {
  const customerDataMock = [
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
    it("should be true", () => {
      expect(true).toBe(true);
    })
  ];
  // it("should render a table with a column to display the company name", () => {
  //   render(<Table customerData={customerDataMock} />);
  //   const tableColumn = screen.getByRole("columnheader", { name: "Company" });
  //   expect(tableColumn).toBeInTheDocument();
  // });
  // it("should render a table with a column to display the industry", () => {
  //   render(<Table customerData={customerDataMock} />);
  //   const tableColumn = screen.getByRole("columnheader", { name: "Industry" });
  //   expect(tableColumn).toBeInTheDocument();
  // });
  // it("should render a table with a column to display the number of projects", () => {
  //   render(<Table customerData={customerDataMock} />);
  //   const tableColumn = screen.getByRole("columnheader", { name: "Projects" });
  //   expect(tableColumn).toBeInTheDocument();
  // });
  // it("should render a table with a column to display the about section", () => {
  //   render(<Table customerData={customerDataMock} />);
  //   const tableColumn = screen.getByRole("columnheader", { name: "Actions" });
  //   expect(tableColumn).toBeInTheDocument();
  // });
  // it("should render a message if no customers are passed in", () => {
  //   render(<Table customerData={[]} />);
  //   const message = screen.getByText("No customers were found.");
  //   expect(message).toBeInTheDocument();
  // });
});

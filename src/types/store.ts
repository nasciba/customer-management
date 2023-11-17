import { CustomerData } from "./customerData";

export interface StoreState {
    customers: {
        customersList: CustomerData[];
        industryDropdownValues: never[];
        filteredList: CustomerData[];
      };
      newCustomer: CustomerData;
      editCustomer: CustomerData;
}
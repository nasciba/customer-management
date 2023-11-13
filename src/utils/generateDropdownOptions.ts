import { CustomerDataDto } from "../dtos/customer-data-dto";

const generateDropdownOptions = (list: CustomerDataDto[]) => {
  return list
      .filter(
        (item: CustomerDataDto, index: number, receivedList: CustomerDataDto[]) =>
          index ===
          receivedList.findIndex(
            (listItem: CustomerDataDto) =>
              listItem.industry === item.industry 
          )
      )
      .map((item: CustomerDataDto) => item.industry).sort();
}

export default generateDropdownOptions;
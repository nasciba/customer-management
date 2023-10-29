const generateDropdownOptions = (list: any) => {
    return list
      .filter(
        (item: any, index: number, receivedList: any) =>
          index ===
          receivedList.findIndex(
            (listItem: any) =>
              listItem.industry === item.industry 
          )
      )
      .map((item: any) => item.industry);
}

export default generateDropdownOptions;
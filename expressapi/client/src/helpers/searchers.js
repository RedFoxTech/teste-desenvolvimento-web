export function searchCategory(searchName, array) {
  let searchList = [];

  searchList = array.filter(
    (element) =>
      element.category.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
  );

  return searchList;
}

export function searchDescription(searchName, array) {
  let searchList = [];

  searchList = array.filter(
    (element) =>
      element.description.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
  );
  return searchList;
}

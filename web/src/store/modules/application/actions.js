export function setSearchInput(searchInput) {
  return {
    type: '@application/SET_INPUT',
    payload: { searchInput },
  };
}

export function setPage(page) {
  return {
    type: '@application/SET_PAGE',
    payload: { page },
  };
}

export function setLength(length) {
  return {
    type: '@application/SET_LENGTH',
    payload: { length },
  };
}

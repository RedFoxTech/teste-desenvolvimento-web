function getPageValue(string) {
  const value = string.trim().split(' ').pop();
  return value;
}

export default getPageValue;
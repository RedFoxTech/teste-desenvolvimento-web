const total = 194;
const arrayItems = [...Array(Math.ceil(total + 1)).keys()].slice(1);
const families = arrayItems.reduce((prev, next) => {
  const value = {
    value: next,
    label: next,
  };
  prev.push(value);
  return prev;
}, []);

const booleans = [
  {
    value: true,
    label: 'Yes',
  },
  {
    value: false,
    label: 'No',
  },
];

export { families, booleans };

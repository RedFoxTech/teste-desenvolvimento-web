function renderColumnValues({ column, columnOptions, value }) {
  let renderedValue;
  let columnOptionsNames;

  switch (column) {
    case 'generations':
      columnOptionsNames = columnOptions.map((name) => name.generation);
      renderedValue = columnOptionsNames[value - 1];
      break;
    case 'evolution_stages':
      columnOptionsNames = columnOptions.map((name) => name.evolution_stage);
      renderedValue = columnOptionsNames[value - 1];
      break;
    case 'types':
      columnOptionsNames = columnOptions.map((name) => name.type);
      renderedValue = columnOptionsNames[value - 1];
      break;
    case 'weathers':
      columnOptionsNames = columnOptions.map((name) => name.weather);
      renderedValue = columnOptionsNames[value - 1];
      break;
  }
  return renderedValue;
}

export default renderColumnValues;

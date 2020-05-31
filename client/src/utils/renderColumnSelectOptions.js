function renderSelectsOptions({ key, selects }) {
  const options = selects.reduce((prev, next) => {
    let value = null;
    switch (key) {
      case 'aquireables':
        value = { [next.id]: next.aquireable };
        break;
      case 'evolution_stages':
        value = { [next.id]: next.evolution_stage };
        break;
      case 'generations':
        value = { [next.id]: next.generation };
        break;
      case 'hatchables':
        value = { [next.id]: next.hatchable };
        break;
      case 'legendaries':
        value = { [next.id]: next.legendary };
        break;
      case 'raidables':
        value = { [next.id]: next.raidable };
        break;
      case 'types':
        value = { [next.id]: next.type };
        break;
      case 'weathers':
        value = { [next.id]: next.weather };
        break;
    }
    prev = { ...value, ...prev };
    return prev;
  }, {});

  return options;
}

export default renderSelectsOptions;

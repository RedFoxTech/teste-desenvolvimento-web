function renderFormSelect({ key, selects }) {
  const options = selects.reduce((prev, next) => {
    let value = null;
    switch (key) {
      case 'aquireables':
        value = { value: next.id, label: next.aquireable };
        break;
      case 'evolution_stages':
        value = { value: next.id, label: next.evolution_stage };
        break;
      case 'generations':
        value = { value: next.id, label: next.generation };
        break;
      case 'hatchables':
        value = { value: next.id, label: next.hatchable };
        break;
      case 'legendaries':
        value = { value: next.id, label: next.legendary };
        break;
      case 'raidables':
        value = { value: next.id, label: next.raidable };
        break;
      case 'types':
        value = { value: next.id, label: next.type };
        break;
      case 'weathers':
        value = { value: next.id, label: next.weather };
        break;
    }

    prev.push(value);
    return prev;
  }, []);

  return options;
}
export default renderFormSelect;

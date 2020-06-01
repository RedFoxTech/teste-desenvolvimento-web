import React from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

function CustomSelect({ value, handleChange, error, label, id, options }) {
  const handleOnChange = (event) => {
    handleChange(event);
  };

  return (
    <>
      <label>{label}</label>
      <Select
        id={id}
        options={options}
        multi={false}
        onChange={handleOnChange}
        value={options && options.find((option) => option.value === value)}
      />
      {!!error && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
      )}
    </>
  );
}

export default CustomSelect;

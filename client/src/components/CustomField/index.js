import React from 'react';
import { Form } from 'react-bootstrap';

function CustomField({
  value,
  handleChange,
  onBlur,
  error,
  label,
  id,
  type,
  editValue,
}) {
  return (
    <>
      <label style={{ display: 'block' }}>{label}</label>
      <Form.Control
        name={id}
        type={type}
        min={type === 'number' ? 1 : false}
        id={id}
        value={value}
        onChange={handleChange}
      />
      {!!error && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
      )}
    </>
  );
}

export default CustomField;

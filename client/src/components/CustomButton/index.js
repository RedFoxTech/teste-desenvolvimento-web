import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

function CustomButton({ label, onClick, variant, type }) {
  return (
    <Button
      style={{ height: 40 }}
      onClick={onClick}
      variant={variant}
      type={type}
    >
      {label === 'Add' && <FaPlusCircle style={{ marginRight: 10 }} />}
      {label === 'Back' && <FaArrowLeft style={{ marginRight: 10 }} />}
      {label}
    </Button>
  );
}

export default CustomButton;

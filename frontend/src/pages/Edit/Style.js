import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #28262e;
  margin: 0;

  h1 {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ff9000;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: column;
  flex-direction: row-reverse;
`;

export const Form = styled.div`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;
`;

export const FormGroup = styled.form`
  color: #eee;
  display: block;
  width: 300px;
  margin: 50px auto;

  input {
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #000;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;
  flex: 1;
  border: 0;
  color: #f4ede8;

  &::placeholder {
    color: #666360;
  }
`;

export const Select = styled.select`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 110%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;
  flex: 1;
  border: 0;
  color: #f4ede8;
  margin-top: 10px;

  &::placeholder {
    color: #666360;
  }
`;

export const Button = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 110%;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  cursor: pointer;
`;

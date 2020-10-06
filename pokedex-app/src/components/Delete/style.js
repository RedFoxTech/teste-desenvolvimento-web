import styled from "styled-components";

export const ButtonDelete = styled.button`
  width: 120px;
  height: 30px;
  margin: 2px;
  border: none;
  border-radius: 3px;
  background-color: red;
  color: white;
  font-weight: bolder;
  transition: all ease 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(0.9);
    :active {
      transform: scale(1);
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-weight: bolder;
  width: 55%;
  height: 400px;

  box-shadow: 1px 2px 40px 1px red;
  input {
    width: 79%;
    border: none;
    align-items: center;
    :hover {
      cursor: text;
    }
  }
  label {
    padding-left: 140px;
    font-weight: bold;
  }
`;

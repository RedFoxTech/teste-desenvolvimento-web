import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 55%;
  height: 400px;

  box-shadow: 1px 2px 80px 1px red;
  input {
    width: 200px;
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container2 = styled.div`
  margin-right: 720px;
  margin-top: 50px;
`;

export const ButtonSubmit = styled.button`
  width: 120px;
  height: 30px;
  margin-top: 20px;
  margin-left: 200px;
  border: none;
  border-radius: 3px;
  background-color: #fffdd0;
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

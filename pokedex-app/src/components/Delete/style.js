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

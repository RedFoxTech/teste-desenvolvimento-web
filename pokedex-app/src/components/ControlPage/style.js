import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  margin-top: 5%;
`;

export const Painel = styled.div`
  background-color: #c0c0c0;
  color: #fffdd0;
  text-shadow: 2px 2px 2px black;
  width: 800px;
  height: 18vh;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  text-align: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  margin: 2px;
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

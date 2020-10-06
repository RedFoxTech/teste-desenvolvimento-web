import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 80px;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 55%;
  height: 400px;
  font-weight: bolder;
  box-shadow: 1px 2px 40px 1px red;
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

export const Pokemons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 850px;
  height: 800px;
  font-weight: bolder;
  :hover {
    cursor: pointer;
  }
`;

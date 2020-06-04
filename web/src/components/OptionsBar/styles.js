import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #e0b300;
  border-radius: 4px;
  height: 50px;
  padding: 0 5px;
  margin-right: 20px;

  @media (max-width: 550px) {
    margin: 0 0 20px;
  }

  input {
    border: none;
    border-bottom: 2px solid #fff;
    background: none;
    color: #fff;
    width: 100%;

    ::placeholder {
      color: #fff;
      font-style: italic;
    }
    font-size: 18px;
    padding: 10px;
    margin-right: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0b300;
  padding: 5px;
  border-radius: 4px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    box-shadow: 2px 2px 8px #111;
    cursor: pointer;
  }

  span {
    color: #fff;
  }
`;

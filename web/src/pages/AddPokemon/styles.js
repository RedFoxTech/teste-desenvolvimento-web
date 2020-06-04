import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 300px;

  @media (max-width: 1500px) {
    padding: 50px 100px;
  }

  @media (max-width: 800px) {
    padding: 50px 50px;
  }

  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #333;
    font-size: 25px;
  }

  button {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    background: none;
    border: 0;
    border-radius: 4px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:nth-of-type(1) {
    background: #e0b300;

    &:hover {
      box-shadow: 2px 2px 8px #111;
    }
  }

  button:nth-of-type(2) {
    background: #53e573;

    &:hover {
      box-shadow: 2px 2px 8px #111;
    }
  }
`;

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  margin-top: 30px;

  @media (max-width: 600px) {
    padding: 40px 0;
  }

  h1 {
    font-size: 25px;
    align-self: center;
    margin-bottom: 30px;
  }

  label {
    font-weight: bold;
    color: #333;
    font-size: 15px;
    margin-bottom: 5px;
  }

  input {
    height: 40px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    color: #333;
    padding-left: 15px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

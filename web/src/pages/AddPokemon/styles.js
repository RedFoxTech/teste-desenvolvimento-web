import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  padding: 50px 500px;
  min-width: 980px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #333;
    font-size: 25px;
  }

  div {
    display: flex;

    button {
      color: #fff;
      font-weight: bold;
      font-size: 12px;
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
      background: #c2c2c2;
      margin-right: 20px;

      &:hover {
        background: ${darken(0.1, '#999')};
      }
    }

    button:nth-of-type(2) {
      background: #7159c1;

      &:hover {
        background: ${lighten(0.1, '#7159c1')};
      }
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

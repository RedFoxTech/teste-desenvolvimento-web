import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  margin-right: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #e0b300;
  border-radius: 4px;
  padding: 0 5px;
  height: 40px;

  input {
    border: none;
    color: #999;
    font-size: 16px;
    width: 250px;
    padding: 5px;
    margin-right: 10px;
  }
`;

export const FilterContainer = styled.div`
  display: none;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin-left: 20px;
  padding: 0 5px 0;

  span {
    color: #999;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background: #e0b300;
  padding: 5px;
  border-radius: 4px;
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

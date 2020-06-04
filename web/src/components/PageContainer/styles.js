import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;

  span {
    font-size: 25px;
    color: #fff;
    padding: 0 10px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  background: #e0b300;
  justify-content: center;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const PageButton = styled.button`
  background: #fff;
  border-radius: 4px;
  border: 0;

  &:hover {
    box-shadow: 2px 2px 8px #111;
  }
`;

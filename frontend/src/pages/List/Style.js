import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #28262e;
  margin: 0;

  h1 {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ff9000;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  background: #ff9000;
  height: 30px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    color: #666;
    cursor: pointer;
  }
`;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #28262e;
    color: white;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

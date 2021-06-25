import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 35px;
`;

Container.Button = styled.button`
  width: 100%;
  height: 30px;
  margin: 0 15px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.btnOrange;
  }};
  font-family: 'Anton', monospace;
  font-size: ${({ theme }) => {
    return theme.font.normal;
  }};
  color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border: none;
  border-radius: ${({ theme }) => {
    return theme.border;
  }};

  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

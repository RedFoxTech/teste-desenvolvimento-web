import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => {
    return theme.colors.primary;
  }};
  color: ${({ theme }) => {
    return theme.colors.white;
  }};
`;

export const Title = styled.img`
  width: 300px;
  margin: 15px;
`;

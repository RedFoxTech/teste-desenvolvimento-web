import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    Form {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;

      border-radius: 8px;
    }

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      // bordar superior transparente
      border-bottom: 3px solid transparent;
      // bordar inferior transparente

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['red-500']};
      }

      &.active {
        color: ${(props) => props.theme['red-500']};
      }
    }
  }
`

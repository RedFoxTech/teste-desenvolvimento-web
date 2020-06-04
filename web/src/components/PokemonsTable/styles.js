import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  justify-content: space-evenly;
  margin-top: 30px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 15px;
    }
  }
`;

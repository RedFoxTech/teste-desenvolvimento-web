import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0.9em;
`;

export const PokemonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--default);
  width: 100%;
  max-width: 1024px;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const PaginationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  height: 3em;
  margin-top: 1.5em;
  .paginationUl {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0 10%;
    color: var(--gra2);
    @media (min-width: 1200) {
    }
  }
  .previousBttn,
  .nextBttn {
    color: var(--gray2);
    cursor: pointer;
  }
  .paginationActive {
    text-decoration: underline;
    color: var(--gray2);
  }
  .paginationPages {
    cursor: pointer;
  }
`;

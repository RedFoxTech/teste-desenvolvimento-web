import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray2);
  width: 90%;
  border-radius: 4px;
  max-width: 375px;
  margin-top: 0.9em;
  margin-bottom: 0.5em;
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0.5em;
  width: 100%;
  height: 2.5em;
  border-radius: 4px 4px 0px 0px;
  background-color: var(--gray3);
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ExcludeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5em;
  height: 2.5em;
  width: 50%;
  color: red;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 13em;
  ul {
    width: 97%;
    padding-left: 0.5em;
  }
  li {
    border-bottom: 1px solid var(--gray3);
  }
`;

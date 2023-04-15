import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--gray3);
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0.5em;
  width: 50%;
  height: 2.5em;
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

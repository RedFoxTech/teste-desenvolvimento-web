import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  align-items: center;
  margin-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 230px;
  background: #cee1ec;
  padding: 5px 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px #333;

  div {
    border-radius: 4px;
    animation-duration: 1s;
    animation-name: changeColor;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes changeColor {
      from {
        background: #444;
      }

      to {
        background: #999;
      }
    }
  }

  div:nth-of-type(1) {
    height: 20px;
  }

  div:nth-of-type(2) {
    height: 120px;
  }

  div:nth-of-type(3) {
    height: 40px;
  }

  div:nth-of-type(4) {
    height: 20px;
  }
`;

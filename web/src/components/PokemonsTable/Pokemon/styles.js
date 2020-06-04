import styled from 'styled-components';

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

  &:hover {
    background: #fff;
    box-shadow: 2px 2px 8px #fff;
    cursor: pointer;
  }

  span {
    color: #333;
  }

  img {
    width: 200px; /* width of container */
    height: 100px; /* height of container */
    object-fit: fill;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:nth-of-type(1) {
    font-size: 20px;
    font-weight: bolder;
  }

  span:nth-of-type(2) {
    font-size: 14px;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 14px;
  }
`;

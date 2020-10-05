import styled from "styled-components";

export const Header = styled.h1`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background: linear-gradient(to top, #ff3300 0%, #ffffcc 65%);
  height: 80px;
  margin: 0 0 40px 0;
  display: flex;
  align-items: center;
  color: #fffdd0;
  text-shadow: 2px 2px 2px #00008b;
  padding: 0 0 0 10px;
`;
export const Image = styled.img`
  display: flex;
  justify-items: start;
  width: 80px;
  height: 70px;
  margin-right: 20px;
`;

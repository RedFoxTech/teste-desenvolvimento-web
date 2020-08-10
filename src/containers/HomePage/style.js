import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#F5F5F5
`
export const PokeballImage = styled.img`
  width: 10%;
  height: 100%
`
export const Button = styled.button`
    height: 36px;
    border-radius: 5px;
    background: #fddfdf;
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    width: 30%;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    &:hover{
        background: #c35454;
    }
`
export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin: 5%;
  width: 80%;
  height: 100%;
  background-color: #f1f1f1;
  position: fixed;
`
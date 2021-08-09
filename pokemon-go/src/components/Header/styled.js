import styled from "styled-components";


export const HeaderContainer = styled.div`
   width: 100%;
`
export const HeaderMain = styled.div`
    height: 7vw;
    background-color: rgb(196, 21, 26);
    display: flex;
    justify-content: center;
    cursor: pointer;
    
    @media screen and (max-width: 480px){
        height: 20vh;
   }
`
export const Faixa = styled.div`
    height: 1.5vw;
    background-color: black;
    @media screen and (max-width: 480px){
        height: 3vh;
   }
`
export const Logo = styled.img`
    width: 16vw;
    @media screen and (max-width: 480px){
        width: 60vw;
   }
`
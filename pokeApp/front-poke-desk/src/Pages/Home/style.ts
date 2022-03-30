import styled from "styled-components";


export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Banner = styled.div`
    background-image: url("./src/assets/banner.png");
    width: 30vw;
    height: 30vh;
    background-size : contain;
    background-repeat: no-repeat;
`
export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    div {
        margin : 13px;
    }
`

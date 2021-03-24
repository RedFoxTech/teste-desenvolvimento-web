import styled from "styled-components";

const Container = styled.div`
    height: 85vh;
    width: 100%;

    @media(min-width: 1024px){
        width: 45%;
    }
`;

const MobileContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Inter" ;

    > h1 {
        font-size: 2.4rem;
        margin: -10vh 0 10vh;
        color: #fff;
    }
`

const MobileButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    > div { 
        height: 20vh;
        width: 35vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--lighter-blue);
        border-radius: 10px;

        color: var(--dark-blue);
        font-size: 1.2rem;
        > svg {
            font-size: 4rem;
            color: var(--light-blue);
            margin: 5%;
        }


    }

`

export {
    Container,
    MobileContent,
    MobileButtonsContainer
}
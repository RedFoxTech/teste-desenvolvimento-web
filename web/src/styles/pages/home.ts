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

    @media(min-width: 1024px){
        display: none;
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

const DesktopContent = styled.div`
    height: 100%;
    width: 80vw;
    /* margin-top: 15vh; */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > h1 {
        margin-top: -9vh;
        font-size: 3.4rem;
        color: #fff;
        font-family: "Inter";
        text-shadow: 2px 2px 4px rgba(0,0,0,.6)

    }

    > p { 
        font-size: 3rem;

        font-family: "Nunito";
        margin: 10vh;
        color: var(--white);
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0,0,0,.6)

    }

`

export {
    Container,
    MobileContent,
    MobileButtonsContainer,
    DesktopContent
}
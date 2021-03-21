import styled from "styled-components";

const Container = styled.div`
    height: 15vh;
    width: 100%;
    font-family: 'Nunito', sans-serif;
    background: var(--white-opacity);
    padding-left: 4vw;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    > h3 {
        color: var(--dark-blue);
    }

    > h1 { 
        font-size: 1.5rem;
        font-family: 700;
    }

    > p {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--dark-blue)
    }

`

export {
    Container
}
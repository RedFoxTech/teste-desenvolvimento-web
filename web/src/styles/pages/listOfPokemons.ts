import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    padding: 10px;

    > h1 { 
        color: var(--white);
        text-align: center;
        font-family: "Inter";
    }

    > p { 
        color: var(--white);
        font-family: "Nunito";
        margin: 20px;
        text-align: center;
    }
`

export {
    Container
}
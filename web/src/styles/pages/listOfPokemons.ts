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
        font-weight: 700;

        > button { 
             padding: 3px 8px;
             margin: 10px;
             border: 0;
             color: var(--dark-blue);
             border-radius: 5px;
             background: var(--white);
            outline: none;
            cursor: pointer;

             &:disabled {
                 background: #ffffff60
             }
        }

        > select {
            outline: none;
            border: 1px solid var(--dark-blue);
            background: var(--white);
            border-radius: 5px;
            color: var(--dark-blue)
        }
    }

    @media( min-width: 1024px ){
        width: 80vw;

        > h1 {
            font-size: 2.7rem;
            margin: 3vh
        }

        > p {

        }
    }
`

export {
    Container
}
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

        button { 
             padding: 3px 8px;
             margin: 10px;
             border: 0;
             color: var(--dark-blue);
             border-radius: 5px;
             background: var(--white);
            outline: none;

             &:disabled {
                 background: #ffffff60
             }
             
        }
    }
`

export {
    Container
}
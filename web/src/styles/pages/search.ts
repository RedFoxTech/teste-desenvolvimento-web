import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > h1 {
        font-family: "Inter";
        text-align: center;
        margin: 3vh; 
        color: #ffffff
    }

    @media(min-width: 1024px){
        width: 80vw
    }
`;

const SearchAreaContainer = styled.div`
    height: 60px;
    width: 90vw;
    margin: 40px auto;

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-end;

    > input { 
        width: 100%;
        height: 35px;
        border-radius: 5px;
        border: none;
        background: var(--light-blue);
        transition: background .7s, color .5s;
        outline: none;
        text-align: center;
        font-size: 1.3rem;
        color: var(--lighter-blue);

        &:focus { 
            background: var(--lighter-blue);
            color: var(--light-blue);

        }
        

    }

    > select {
        width: 100%;
        height: 35px;
        font-size: 1.3rem;
        border-radius: 8px;
        background: var(--lighter-blue);
        color: var(--dark-blue);
        outline: none;
        padding-left: 10%;
        margin-bottom: 5px;
    }


    > button { 
        margin: 10px 0;
        height: 35px;
        padding: 3px 7px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        border-radius: 5px;
        font-family: "Nunito";
        background: var(--lighter-blue);
        outline: none;

        color: var(--dark-blue);

        font-weight: 600 ;

        > svg {
            margin: 0 4px;
        }


    }

    @media(min-width: 1024px){
        max-width: 50%
    }


`

const ResultContainer = styled.div`
    width: 100%;
    flex-grow: 1;


    
`

export { 
    Container,
    SearchAreaContainer,
    ResultContainer
}
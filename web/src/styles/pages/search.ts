import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
        font-family: "Inter";
        text-align: center;
        margin: 3vh; 
        color: #ffffff
    }
`;

const SearchAreaContainer = styled.div`
    height: 60px;
    width: 90vw;
    margin: 0 auto;

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
        width: 55%;
        height: 30px;
        border-radius: 8px;
        background: var(--dark-blue);
        color: #ffffff;
        outline: none;
        padding-left: 10%
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
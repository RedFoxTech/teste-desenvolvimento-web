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
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-width: 70vw;

        > input {
            width: 30vw;
            margin: 0 5px;
            color: var(--white)
        }

        > select {
            max-width: 150px;
            padding: 0;
            margin: 0;
            cursor: pointer;
        }

        > button {
            cursor: pointer;
        }

        
    }


`

const ResultContainer = styled.div`
    width: 100%;
    flex-grow: 1;


    
`
const WarningModal = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top:0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.6);
    z-index: 99;

    > main {
        background: var(--white);
        height: 40vh;
        width: 90vw;
        max-width: 400px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > h1 {
            font-size: 2.5rem;
            font-family: "Inter";
            color: var(--red);
            text-align: center;
            margin: 5vh auto 0;
        }

        > p {
            font-family: "Nunito";
            color: var(--grey);
            font-weight: 700;
            margin: 5vh 3vw ;
            text-align: center;
        }

        > button {
            width:70%;
            border: 0;
            outline: none;
            font-family: "Nunito";
            font-size: 1.5rem;
            border-radius: 5px;
            background: var(--dark-blue);
            color: var(--white);
            margin: 2vh;
            
            transition: all .4s;
            cursor: pointer;
            &:hover{ 
                background: var(--light-blue);

            }
        }
        
    }
` 

export { 
    Container,
    SearchAreaContainer,
    ResultContainer,
    WarningModal
}
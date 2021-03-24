import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > h1 { 
        color: var(--white);
        font-weight: 800;
        font-family: 'Nunito';
        text-align: center;
        margin: 5vh;
    }

    > p {
        font-size: 1.3rem;
        color: var(--yellow);
        font-family: "Nunito";
        text-align: center;
    }

  

    >button {
        width: 80vw;
        max-width: 400px;

        margin: 3vh;
        font-size: 1.7rem;
        font-family: "Nunito";
        font-weight: 600;
        border-radius: 5px;
        border: 0;
        background: var(--green);
        color: var(--white);
    }

    @media(min-width: 1024px){
        width: 80vw;
        margin-left: 20vw
    }

`


const ModalError = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0; 
    right: 0;

    background: rgba(0,0,0,.7);
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    > main {        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: var(--white);
        width: 90vw;
        max-width: 500px;
        border-radius: 10px;

        > h1 {
            font-size: 2.5rem;
            font-family: "Inter";
            margin: 4%;
            color: var(--red);
        }

        p {
            font-family: "Nunito";
            text-align: center;
            color: var(--grey);
            font-weight: 600;
        }


        button {
            margin: 5%;
            width: 50%;
            font-size: 1.5rem;
            font-family: "Nunito";
            border-radius: 5px;
            border: 0;
            background: var(--dark-blue);
            color: var(--white);
            
        }
        

    }

`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    > label { 
        border-radius: 10px;
        margin: 20px 0 ;
        position: relative;
        width: 90vw;
        max-width: 300px;
        height: 40px;
        display: flex;
        background: var(--white);
        overflow: hidden;

        > span { 
            background: var(--dark-blue);
            position: absolute;
            bottom: 0;
            left: 0;
            top: 0;
            padding: 3px 9px;

            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--white);
            font-family: "Nunito";
            font-weight: 700;

        }
        
        > input {
            flex-grow: 1;   
            outline: none;
            border: 0;
            text-align: center;
            font-family: "Nunito";
            font-weight: 600;

            &[type="number"]{
                text-align: right;
                padding-right: 5%;
            }
        }
    }
`
export {
    Container,
    ModalError,
    Content
}
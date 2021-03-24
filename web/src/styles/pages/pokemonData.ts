import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    
    > h1 { 
        font-family: "Nunito";
        font-weight: 800;
        color: #fff;

        text-align: center;

        font-size: 3.2rem;
        margin: 5vh 0;
    }

     > p{ 
        text-align: center;
        font-family: "Nunito";
        font-weight: 600;
        color: var(--yellow);
     }


     @media(min-width: 1024px){
         width: 80vw
     }
    
`

const ButtonsArea = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    > button {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: none;
        
        font-size: 1.3rem;
        padding: 2px 5px;
        font-family: "Nunito";
        font-weight: 600;
        margin: 5px;
        border: 0;
        outline: 0;
        border-radius: 10px;
        color: var(--white);
        cursor: pointer;

        > svg {
            margin: 0 10px
        }

        &.update {
            background: var(--yellow);
            color: var(--grey);
        }

        &.save{
            background: var(--green);
        }

        &.delete{
            background: var(--red);


        }
    }


`

const InfosArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    > label {
        position: relative; 
        height: 40px;
        width: 80vw;
        max-width: 300px;
        margin: 15px;
        pointer-events: none;

        
        span {
            position: absolute;
            bottom: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 100%;
            pointer-events: none;
            font-family: "Inter";
            background: var(--dark-blue);
            padding: 5px;
            border-radius: 10px;

            font-size:1rem;

            color: var(--lighter-blue)

        }

        > input {
            width: 100%;
            height: 100%;
            background: var(--white-opacity);
            text-align: right;
            font-size: 1.2rem;
            
            padding-right: 8%;
            border: 0;
            border-radius: 10px;
            outline: none;
            pointer-events: initial;
            font-family: "Nunito"
        }
    }


    @media(min-width: 1024px) {
        flex-direction: row
    }
`

const DeleteModal = styled.div`
    width: 100%;
    
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0,0,0,.7);

    > main {
        width: 90vw;
        max-width: 600px;
        background: var(--white);
        border-radius: 10px;

        > h1 {
            font-family: "Inter";
            text-align: center;

            margin: 5%;
            color: var(--red);
        }

        > p {
            font-family: "Nunito";
            text-align: center;
            font-weight: 600;
        }

        > button {
            width: 45%;
            margin: 5% 2.5%;
            height: 30px;
            border: none;
            outline: none;
            font-size: 1.3rem;
            font-family: "Nunito";
            font-weight: 600;
            cursor: pointer;
            
            &.cancel {
                color: var(--grey);
                background: none;
            }

            &.delete { 
                background: var(--red);
                color: var(--white);
                border-radius: 5px;
            }
        }
    }
` 

export {
    Container,
    ButtonsArea,
    InfosArea,
    DeleteModal
}
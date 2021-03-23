import styled from "styled-components";

const Container = styled.div`
    
    > h1 { 
        font-family: "Nunito";
        font-weight: 800;
        color: #fff;

        text-align: center;

        font-size: 3.4rem;
        margin: 5vh;
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
        
        font-size: 1.3rem;
        padding: 2px 5px;
        font-family: "Nunito";
        font-weight: 600;
        margin: 5px;
        border-radius: 5px;
        border: 0;
        outline: 0;
        color: var(--grey);

        &.update {
            background: #FFF735;
        }

        &.save{
            background: #61DD27;
            color: var(--white-opacity)

        }

        &.delete{
            background: #D60000;
            color: var(--white-opacity)

        }
    }


`

const InfosArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    

    > label {
        position: relative; 
        height: 40px;
        width: 80vw;
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
`

export {
    Container,
    ButtonsArea,
    InfosArea
}
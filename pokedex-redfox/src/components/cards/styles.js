import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 170px;
    height: 170px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    /* background: linear-gradient(180deg, ${props => props.background} 50%, ${props => props.background2} 50%); */
    background: ${props => {
        if (props.background1 && props.background2){
            return `linear-gradient(180deg, ${props.background1} 50%, ${props.background2} 50%);`
        }
        else {
            return props.background1
        }
    }};
`
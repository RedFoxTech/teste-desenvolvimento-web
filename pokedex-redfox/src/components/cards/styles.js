import styled from 'styled-components';

export const MainContainer = styled.a`
    width: 170px;
    height: 170px;
    cursor: pointer;
    border: 3px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    margin: 10px;
    background: ${props => {
        if (props.background1 && props.background2) {
            return `linear-gradient(180deg, ${props.background1} 50%, ${props.background2} 50%);`
        }
        else {
            return props.background1
        }
    }};
`
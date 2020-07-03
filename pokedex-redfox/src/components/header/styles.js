import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    background: #A3173C;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 15px;

    input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid white;
        color: white;
        font-family: 'Roboto', 'sans-serif'
    }
   
   button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;

    img{
        width: 40px;
    }
   }
`





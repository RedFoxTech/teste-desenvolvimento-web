import styled from 'styled-components'

export const Header = styled.div `
    width: 100%;
    background: #A3173C;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
   

    img {
        width: 110px;
        height: 45px;
        padding: 10px;
    }

`

export const NavBar = styled.nav `

    height: 60px;
    padding: 0 1rem;
    margin-right: 10px;

    ul {
        max-width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

`

export const NavItem = styled.li `
    width: calc(60px * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
 
    

    a {
        --button-size: calc(60px * 0.5);
        width: var(---button-size);
        height: var(---button-size);
        padding: 5px;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: grey;
        border-radius: 50%; 
        transition: filter 300ms;    
    }

    a:hover {
        filter: brightness(1.2)
    }

   
`






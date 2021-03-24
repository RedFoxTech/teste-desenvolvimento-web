
import styled, { createGlobalStyle } from 'styled-components';
import PokemonBackground from "../images/pokemon-background.jpg"

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        min-height: 100vh;

        &::-webkit-scrollbar {
            display: inherit;
            width: 9px;
         
        }

        &::-webkit-scrollbar-thumb {
            background: var(--dark-blue);
            border-radius: 10px;
        }

        :root{ 
            --white: #ffffff;
            --white-opacity: rgba(255,255,255,.8);
            --light-blue: #50C0FA;
            --lighter-blue: #C9EDFF;
            --dark-blue: #28AAED;
            --grey: #7B7B7B;
            --yellow: #FFF735;
            --green: #61DD27;
            --red: #ff0000
        }

    }

    body {
        background-image: url(${PokemonBackground});
        background-size: cover;
        background-position: center -1px;
        background-repeat: no-repeat;
        background-attachment: fixed; 
    }

    #root { 
        background: #00000076;
    }
`


const Content = styled.div`
    display: flex;
`

export { 
    GlobalStyle,
    Content
}
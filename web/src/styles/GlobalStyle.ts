
import { createGlobalStyle } from 'styled-components';
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
    }

    body {
        background-image: url(${PokemonBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed; 
    }

    #root { 
        background: #00000056;
    }
`

export { 
    GlobalStyle
}
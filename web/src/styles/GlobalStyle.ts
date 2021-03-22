
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

        :root{ 
            --white-opacity: rgba(255,255,255,.8);
            --light-blue: #50C0FA;
            --lighter-blue: #C9EDFF;
            --dark-blue: #28AAED;
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

export { 
    GlobalStyle
}
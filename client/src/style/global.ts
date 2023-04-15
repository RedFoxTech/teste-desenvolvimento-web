import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        border: 0;
        box-sizing: border-box;
        vertical-align: baseline;
        font-size: 100%;
    }
:root{
    --default: #f8f8f8;
    --decor: #ffc900;

    --gray0: #f3f3f3;
    --gray1: #6f5b61;
    --gray2: #222222;
    --gray3: #e9e9e9;
}
body{
    background-color: var(--default);
    &::-webkit-scrollbar {
    width: 0.3em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray3);
    border-radius: 3px;
  }
}
a{
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
button{
    cursor: pointer;
    border: none;
}
`;

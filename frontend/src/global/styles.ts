import styled, {createGlobalStyle} from 'styled-components';
import { theme } from '../global/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
`;
export default GlobalStyle;

export const Container = styled.div`
  margin: 0 auto;
  display: block;
  // Small devices (landscape phones, 320px and up)
  @media (min-width: 320px) {  
    width: 100%;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    width: 100%;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    width: 992px;
  }
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    width: 1100px;
  }
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { 
    width: 1300px;
  }
`

export const Row = styled.div`
  display: flex;
  // Small devices (landscape phones, 320px and up)
  @media (min-width: 320px) { 
    flex-direction: column;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    flex-direction: row;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    flex-direction: row;
  }
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    flex-direction: row;
  }
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { 
    flex-direction: row;
  }
`

export const Column =  styled.div`
  flex: 1;
  align-self: center;
  width: 100%;
  padding: 0 20px;
`
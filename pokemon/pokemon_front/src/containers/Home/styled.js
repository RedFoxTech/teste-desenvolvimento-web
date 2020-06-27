import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    min-width: 300px;
    height: 100px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #c5b6ff;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`
export const StyledLogo = styled.img`
    width: 160px;
    height: 100%;
    margin: 0;
    :hover {
        cursor: pointer;
        opacity: 80%;
        }
`
export const LogoContainer = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`

export const StyledImgSearch = styled.img`
    width: 80px;
`

export const SearchContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-left: 100px;
`
export const ButtonMenu = styled.menu`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 10px;
`

export const StyledButton = styled.button`
    width: 150px;
    height: 30px;
    border: 0;
    outline: 0;
    background-color: black;
    border-radius: 5px;
    color: #c5b6ff;
    :hover {
        cursor: pointer;
        background-color: white;
        border: 1px solid black;
        color: #c5b6ff;
    }
`

export const StyledInput = styled.input`
    width: 70%;
    height: 20px;
    border: 0;
    margin: 0;
    background-color: #c5b6ff;
    border-bottom: 1px solid black;
    color: black;
    outline: none;
    max-width: 200px;
    
`

export const ButtonPass = styled.div`
    height: 50px;
    margin: 20px;
    display: flex;
    flex-direction:row;
    font-family: 'Manrope', sans-serif;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`

export const PokemonCardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    text-align: center;
    font-family: 'Manrope', sans-serif;
`

export const PageCount = styled.span`
margin:10px;
font-size:20px;
`
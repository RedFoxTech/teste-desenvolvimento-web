import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight:lighter;
    
`
export const ContainerLista = styled.div`
    width: 60vw;
    min-width: 300px;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
    margin-top: 4vw; 
    text-align: center;
    
`

export const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 2vw;
`

export const ItemPagination = styled.button`
    margin: 0 0.5vw;
    border-radius: 3px;
    border: none;
    background: none;
    color: #353839;
    cursor: pointer;
    font-weight:lighter;

    :active {
        opacity: 0.3;
    }

    ${props => props.isSelect && {
        background: 'lightgray'
    }}


`

export const ContainerTabela = styled.div`
    tr {
        cursor: pointer;
    }
`

export const Filtros = styled.div`
`
export const Views = styled.div`
`

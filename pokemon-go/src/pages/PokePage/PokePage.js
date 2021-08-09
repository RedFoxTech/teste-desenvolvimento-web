import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { dados } from './dadosPokemon.json'
import { ContainerTabela, ItemPagination, ContainerPagination, Container, ContainerLista, Filtros, Views } from './styled';
import { Table } from 'react-bootstrap';
import { goToPokeDetalisPage } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';



const PokePage = () => {

    const [limitItems, setLimitItems] = useState(80)
    const [page, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [newTabela, setNewTabela] = useState([])
    const totalRegist = dados.length;
    const totalPage = Math.ceil(totalRegist / limitItems);
    const history = useHistory()
    const arrayPages = [];



    for (let i = 1; i <= totalPage; i++) {
        arrayPages.push(i)
    }
    const pageActual = (page) => {
        setCurrentPage(page)
    }
    const previousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }



    const tabela = () => {
        const newList = [];
        let count = (currentPage * limitItems) - limitItems;
        const delimiter = count + limitItems;

        if (currentPage <= totalPage) {

            for (let i = count; i < delimiter; i++) {
                newList.push(dados[i]);
                count++
            }
        }
        setNewTabela(newList)
    }


    useEffect(() => {
        setPages(arrayPages);
        tabela();
    }, [currentPage])

  
    return (
        <Container>
            <Header />
            <ContainerLista>
                <ContainerTabela>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Pokemon</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newTabela.length > 0 ? (newTabela.map((newTabela) =>
                                <tr newTabela={newTabela} key={newTabela.Name} onClick={() => goToPokeDetalisPage(history, newTabela['Pokedex Number'])}>
                                    <td>{newTabela['Pokedex Number']}</td>
                                    <td>{newTabela.Name}</td>
                                    <td>{newTabela['Type 1']}</td>
                                </tr>
                            )) : <></>}
                        </tbody>

                    </Table>
                </ContainerTabela>

                <ContainerPagination>
                    {currentPage > 1 ? <ItemPagination onClick={() => previousPage()}>Previous</ItemPagination> : <ItemPagination>Previous</ItemPagination>}
                    {page.map((page) => (
                        <ItemPagination isSelect={page == currentPage} key={page} onClick={() => pageActual(page)}>{page}</ItemPagination>
                    ))}
                    {currentPage < page.length ? <ItemPagination onClick={() => nextPage()}>Next</ItemPagination> : <ItemPagination>Next</ItemPagination>}
                </ContainerPagination>
            </ContainerLista>
        </Container >
    )
}

export default PokePage;
import React from 'react'
import { useParams } from 'react-router'
import { dados } from '../PokePage/dadosPokemon.json'
import { Container, ContainerTabela, PokemonContainer, VoltarContainer } from './styled'
import { Table } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToPokePage } from '../../routes/Coordinator'

const PokeDetalistPage = () => {

    const history = useHistory()
    const pathParams = useParams()
    const totalRegist = dados.length
    const newListDetail = []
    const pokemonNum = pathParams.number


    console.log('entrou')
    for (let i = 0; i <= totalRegist; i++) {
        if (pokemonNum === dados[i]['Pokedex Number']) {
            newListDetail.push(dados[i])
            break;
        }
    }


    return (
        <Container>
            <Header />
            <PokemonContainer>
                {newListDetail.length > 0 ? (newListDetail.map((newListDetail) =>
                    <p>{newListDetail.Name}</p>)) : <></>}
            </PokemonContainer>
            <ContainerTabela>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Clima</th>
                            <th>Ataque</th>
                            <th>Defesa</th>
                            <th>Stamina</th>
                            <th>Evolution</th>

                        </tr>
                    </thead>
                    <tbody>
                        {newListDetail.length > 0 ? (newListDetail.map((newListDetail) =>
                            <tr>
                                <td>{newListDetail['Type 1']} / {newListDetail['Type 2']}</td>
                                <td>{newListDetail['Weather 1']} / {newListDetail['Weather 2']}</td>
                                <td>{newListDetail.ATK}</td>
                                <td>{newListDetail.DEF}</td>
                                <td>{newListDetail.STA}</td>
                                <td>{newListDetail['Evolution Stage']}</td>
                            </tr>
                        )) : <></>}

                    </tbody>

                </Table>
            </ContainerTabela>

            <VoltarContainer onClick={() => goToPokePage(history)}>
                Poke Lista
            </VoltarContainer>

        </Container>
    )
}

export default PokeDetalistPage
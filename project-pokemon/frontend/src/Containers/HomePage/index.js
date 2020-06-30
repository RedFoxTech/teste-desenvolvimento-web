import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/index'
import Card from '../../Components/Card/index'
import 'rsuite/dist/styles/rsuite-default.css';
import { Pagination } from 'rsuite';
import { connect } from "react-redux";
import { getPokemons,getQuantityPages } from '../../Actions/pokemon'

const Container = styled.div`
background-color:#333333;
min-height:100vh;
width:100%;
text-align:center;
`

const ContainerCards = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            activePage: 1,
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount(){
        const numberPage = 1
        this.props.getPokemons(numberPage)
        this.props.getQuantityPages()   
    }

    handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        })
        this.props.getPokemons(eventKey)
    }

    render(){   
        return(
            <Container>
                <Header />
                <ContainerCards> 
                    {this.props.getToPokemons.map((pokemon) => (
                        <Card pokemon={pokemon} />
                    ))}                         
                </ContainerCards>   
                <Pagination
                    prev
                    last
                    next
                    first
                    pages={this.props.quantityPages} 
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}
                    maxButtons={10}
                    name="numbersPage"
                    onChange={this.handleChange}
                 />    
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    getToPokemons: state.pokemon.allPokemons,
    quantityPages: state.pokemon.quantityOfPages
})

const mapDispatchToProps = dispatch => ({
        getPokemons: (numbersPage) => dispatch(getPokemons(numbersPage)), 
        getQuantityPages: () => dispatch(getQuantityPages())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


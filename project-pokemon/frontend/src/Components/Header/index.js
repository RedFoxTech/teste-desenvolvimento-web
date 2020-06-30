import React from 'react';
import styled from 'styled-components';
import Logo from '../../img/pokefox.png'
import { connect } from "react-redux";
import { getPokemons, getQuantityPages, getPokemonByName } from '../../Actions/pokemon.js'
import SearchIcon from '@material-ui/icons/Search';

const Container = styled.div`
width:100%;
background-color:#333333;
`

const ContainerHeader = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const LogoImg = styled.img`
margin-top:-80px;
margin-bottom:-120px;
width:400px;
height:400px;
`

const ContainerSearch = styled.div`
display:flex;
`

const InputSeach = styled.input`
background-color:#fff;
height: 40px;
width:45vw;
margin-right:30px;
border-radius:15px;
text-decoration:none;
outline: none;
border:solid 2px #5271ff;
margin-left: 70px;
padding-left:45px;
color:#5271ff;
font-size:15px;
text-transform:uppercase;
font-weight:bold;
::-webkit-input-placeholder {
    text-transform:uppercase;
}​
`

const ButtonSearch = styled.button`
background-color:transparent;
border: solid 2px #5271ff;  
border-radius:20px;
outline: none;
`

const ContainerIconSearch = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const IconSearch =  styled(SearchIcon)`
color:#5271ff;
`

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            input: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchPokemonByName = () =>{
        this.props.getPokemonByName(this.state.input)
    }

    render(){
      
        return(
            <Container>
                <ContainerHeader>
                    <LogoImg src={Logo} />
                    <ContainerSearch>
                        <InputSeach 
                            placeholder="Pesquisar Pokemon"
                            onChange={this.handleInputChange}
                            name="input"    
                            value={this.state.input}
                        />
                        <ButtonSearch onClick={this.searchPokemonByName}> 
                            <ContainerIconSearch>
                                <IconSearch />
                            </ContainerIconSearch>
                        </ButtonSearch>
                    </ContainerSearch>
                    
                </ContainerHeader>      
            </Container>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemons: (page) => dispatch(getPokemons(page)), 
        getPokemonByName: (pokemonName) => dispatch(getPokemonByName(pokemonName)),
        getQuantityPages: () => dispatch(getQuantityPages())
    }
}

export default connect(null, mapDispatchToProps)(Header);

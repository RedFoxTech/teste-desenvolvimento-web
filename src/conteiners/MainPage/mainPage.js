import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopBar from "../../Components/Header"
import { getPokemonList } from "../../actions/MainPage"
import styled from "styled-components"
import { Paper, Button } from "@material-ui/core"
import GridList from '@material-ui/core/GridList';
import DialogSelect from "../../Components/Dialog"

const GlobalWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #aaaa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`
const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vw 10vw 0 10vw;
`
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 5vw;
`
const PageFooter = styled.div`
background-color: #e86e59;
width: 100%;
height: 3vh;
position: absolute;
bottom: 0;
right: 0;
`

class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextButton: true,
      showPreviousButton: true
    }
  }

  componentDidMount() {
    this.props.getList(this.props.pageNumber)
  }

  consoleLog = () => {
    console.log(this.props.list)
  }

  render() {
    const nextButton = (
      <Button
        variant="contained"
        color="primary"
        onClick={() => this.props.getList(this.props.pageNumber + 1)}
      >
        Próxima página
      </Button>

    )
    const previousButton = (
      <Button
        variant="contained"
        color="primary"
        onClick={() => this.props.getList(this.props.pageNumber - 1)}
      >
        Página anterior
      </Button>
    )

    return (
      <GlobalWrapper>
        <TopBar />

        <DivWrapper>
          < DialogSelect />
        </DivWrapper>

        <GridWrapper>
          <GridList conteiner cols={5} spacing={20}>
            {this.props.list && this.props.list.map(element => {
              return (
                <div>
                  <Paper>
                    <img alt={element.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.Img_name}.png`} />
                    <div>{element.Name}</div>
                    <div>Tipo: {element.Type_1}</div>
                  </Paper>
                </div>
              )
            })}
          </GridList>
        </GridWrapper>


        <p>{this.state.pageList}</p>
        <DivWrapper>
          {this.props.pageNumber > 1 ? previousButton : ''}
          {this.props.lastPageNumber !== this.props.pageNumber ? nextButton : ''}
        </DivWrapper>
        <PageFooter />
      </GlobalWrapper >
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getList: (pageNumber) => dispatch(getPokemonList(pageNumber)),
  };
}
function mapStateToProps(state) {
  return {
    list: state.pokemons.list,
    pageNumber: state.pokemons.pageNumber,
    lastPageNumber: state.pokemons.lastPageNumber,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(mainPage);
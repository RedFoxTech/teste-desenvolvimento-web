import React, { Component } from 'react';
import styled from 'styled-components';
import loading from '../pokemon/loading.gif';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default class PokemonCard extends Component {

  state = {
    name: '',
    imgUrl: '',
    pokemonIndex: '',
    carregandoImg: true,
    muitasRequests: false,
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState({
      name,
      imgUrl,
      pokemonIndex
    });
  }

  render() {

    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Card className="card">

          <h5 className="card-header">
            {this.state.pokemonIndex}
          </h5>

          {this.state.carregandoImg ? (
            <img
              src={loading}
              alt="Carregando"
              style={{
                width: '5em',
                height: '5em'
              }}
              className="card-img-top rounded mx-auto d-block mt-2" />
          ) : null}

          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            onLoad={() => this.setState({ carregandoImg: false })}
            onError={() => this.setState({ muitasRequests: true })}
            src={this.state.imgUrl}
            style={
              this.state.muitasRequests ? { display: 'none' } :
                this.state.carregandoImg ? null : { display: 'block' }
            }
          />
          {this.state.muitasRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">Muitas requisições no Servidor</span>
            </h6>) : null}

          <div className="card-body mx-auto">
            <h6 className="card-title">
              {this.state.name
                .toLowerCase()
                .split(' ')
                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join(' ')
              }
            </h6>
          </div>

        </Card>
      </div>
    );

  }
}

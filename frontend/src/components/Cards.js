import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Button, Card, Media, Title, SubTitle, Content, Tag } from 'reactbulma';

const Cards = ({ pokemon }) => (
  <Box className="column is-narrow is-one-quarter">
    <Card>
      <Card.Image src="http://bulma.io/images/placeholders/480x480.png" ratio="4by3" />
      <Card.Content>
        <Media>
          <Media.Left>
            <Title is="4">#{pokemon.id}</Title>
          </Media.Left>
          <Media.Content>
            <Title is="4">{pokemon.pokemonName}</Title>
            <SubTitle is="6">Geração: {pokemon.generation}</SubTitle>
          </Media.Content>
        </Media>
        <Content>
          <Button info>
            <Link to={`/${pokemon.pokemonName}/${pokemon.id}`}>
              I Choose You: {pokemon.pokemonName}!
            </Link>
          </Button>
        </Content>
        <Content className="columns is-centered is-variable">
          <Tag primary medium className="column is-two-fifths ">
            {pokemon.type1}
          </Tag>
          {pokemon.type2 ? (
            <Tag primary medium className="column is-two-fifths ">
              {pokemon.type2}
            </Tag>
          ) : null}
        </Content>
      </Card.Content>
    </Card>
  </Box>
);

Cards.propTypes = {
  pokemon: PropTypes.shape({
    generation: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    pokemonName: PropTypes.string.isRequired,
    type1: PropTypes.string.isRequired,
    type2: PropTypes.string,
  }),
};

Cards.defaultProps = { pokemon: { type2: '' } };

export default Cards;

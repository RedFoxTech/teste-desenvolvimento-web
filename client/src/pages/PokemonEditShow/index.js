import React from 'react';

// import { Container } from './styles';

function PokemonEditShow({ match }) {
return <pre>{JSON.stringify(match, null, 2)}</pre>;
}

export default PokemonEditShow;
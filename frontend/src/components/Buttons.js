import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactbulma';

const Buttons = ({ id }) => (
  <Container>
    <Button success large>
      <Link to={`${id}/generation`}>Generation</Link>
    </Button>
    <Button warning large>
      <Link to={`${id}/stats`}>Stats</Link>
    </Button>
    <Button danger large>
      <Link to={`${id}/attributes`}>Attributes</Link>
    </Button>
  </Container>
);

Buttons.propTypes = { id: PropTypes.number.isRequired };

export default Buttons;

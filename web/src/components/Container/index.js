import { Container } from '@material-ui/core';

function ContainerComponent({ children }) {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default ContainerComponent;
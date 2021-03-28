import { Container } from '@material-ui/core';

function ContainerComponent({ children }) {
  return (
    <Container maxWidth="sm" maxWidth="md" maxWidth="lg">
      { children }
    </Container>
  )
}

export default ContainerComponent;
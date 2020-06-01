import React from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { Container, Row } from 'react-bootstrap';

import history from './services/history';

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center m-3">
        <Routes history={history} />
        <NotificationContainer />
      </Row>
    </Container>
  );
}

export default App;

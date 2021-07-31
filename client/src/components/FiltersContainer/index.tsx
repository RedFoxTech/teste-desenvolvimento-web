import React from "react";
import { Col, Row, Form, Dropdown } from "react-bootstrap";

interface IProps {
    handleFilterChange: (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    nameFilter: string;
    getFiltredPokemons: () => void;
    rowsPerPage: number;
    handeRowsPerPage: (number: number) => void;
}

export default class FiltersContainer extends React.Component<IProps> {
    render() {
        return (
            <Row className="mb-3">
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        placeholder="Busque por numero, nome, tipo ou clima..."
                        onChange={(event) => this.props.handleFilterChange(event)}
                        value={this.props.nameFilter}
                        onKeyPress={(event: React.KeyboardEvent) => (event.key === "Enter") && this.props.getFiltredPokemons()}
                    />
                </Col>
                <Col sm={4}>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic"  >
                            Pokemons Por Pagina
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item active={this.props.rowsPerPage === 10} onClick={() => this.props.handeRowsPerPage(10)}>10</Dropdown.Item>
                            <Dropdown.Item active={this.props.rowsPerPage === 20} onClick={() => this.props.handeRowsPerPage(20)}>20</Dropdown.Item>
                            <Dropdown.Item active={this.props.rowsPerPage === 50} onClick={() => this.props.handeRowsPerPage(50)}>50</Dropdown.Item>
                            <Dropdown.Item active={this.props.rowsPerPage === 100} onClick={() => this.props.handeRowsPerPage(100)}>100</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        );
    }
}
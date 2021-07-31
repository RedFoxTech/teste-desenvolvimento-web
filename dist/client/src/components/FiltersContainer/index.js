"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
class FiltersContainer extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_bootstrap_1.Row, { className: "mb-3" },
            react_1.default.createElement(react_bootstrap_1.Col, { sm: 8 },
                react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "Busque por nome, tipo ou clima...", onChange: (event) => this.props.handleFilterChange(event), value: this.props.nameFilter, onKeyPress: (event) => (event.key === "Enter") && this.props.getFiltredPokemons() })),
            react_1.default.createElement(react_bootstrap_1.Col, { sm: 4 },
                react_1.default.createElement(react_bootstrap_1.Dropdown, null,
                    react_1.default.createElement(react_bootstrap_1.Dropdown.Toggle, { variant: "secondary", id: "dropdown-basic" }, "Pokemons Por Pagina"),
                    react_1.default.createElement(react_bootstrap_1.Dropdown.Menu, null,
                        react_1.default.createElement(react_bootstrap_1.Dropdown.Item, { active: this.props.rowsPerPage === 10, onClick: () => this.props.handeRowsPerPage(10) }, "10"),
                        react_1.default.createElement(react_bootstrap_1.Dropdown.Item, { active: this.props.rowsPerPage === 20, onClick: () => this.props.handeRowsPerPage(20) }, "20"),
                        react_1.default.createElement(react_bootstrap_1.Dropdown.Item, { active: this.props.rowsPerPage === 50, onClick: () => this.props.handeRowsPerPage(50) }, "50"),
                        react_1.default.createElement(react_bootstrap_1.Dropdown.Item, { active: this.props.rowsPerPage === 100, onClick: () => this.props.handeRowsPerPage(100) }, "100"))))));
    }
}
exports.default = FiltersContainer;

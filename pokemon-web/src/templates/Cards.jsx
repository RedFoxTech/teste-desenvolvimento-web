import React, { Component } from "react";
import CardList from "./CardList";
import Modal from "./Modal";

const URL = "http://localhost:3030/pokemons";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ""
        };

        this.refresh();
    }

    async refresh() {
        const res = await fetch(URL);
        const data = await res.json();
        this.setState({ ...this.state, list: data });
    }

    ASUY;

    render() {
        return (
            <React.Fragment>
                <CardList list={this.state.list} />
            </React.Fragment>
        );
    }
}

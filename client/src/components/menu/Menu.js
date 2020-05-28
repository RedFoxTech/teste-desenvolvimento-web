import React, { Fragment } from 'react';
import {Container, Header, Tab} from "semantic-ui-react";
import PokemonsPane from '../Pokemons/Pokemons';
import ImportPane from '../Import/Import';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        activeTabIndex: 0
    }

    handleTabChange = (e, { activeTabIndex }) => this.setState({ activeTabIndex })

    panes = [
        { menuItem: 'Pokemons', render: () =>  <PokemonsPane></PokemonsPane>},
		{ menuItem: 'Import', render: () => <ImportPane></ImportPane> },
    ]

    render() {
        return (<Fragment>
            <Header size="huge">
                Pokemon Stats
            </Header>
            <Tab 
                menu={{color:"teal", inverted:true}}
                activeIndex={this.state.activeTabIndex}
                panes={this.panes}
                onTabChange={this.handleTabChange}>
            </Tab>
        </Fragment>)
    }
}
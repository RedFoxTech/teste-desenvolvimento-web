import React, {Fragment} from "react";
import { Button, Item, Divider, Modal} from 'semantic-ui-react';
import axios from 'axios';
import defaultImg from '../../assets/image.png';
const baseSpriteAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
export default class PokemonItem extends React.Component {
    state = {
        details: {},
        sprite: defaultImg
    }

    componentWillMount() {
        this.setState({details: this.props.details});

    }

    componentDidMount() {
    }

    render () {
        return (
            <Fragment>
                <Item>
                    <Item.Image size='small' src={`${baseSpriteAPI}/${this.state.details.imgNumber}.png`}></Item.Image>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header>{this.state.details.name}</Item.Header>
                        <Item.Description>
                            type1: {this.state.details.type1}
                            <Divider></Divider>
                            generation: {this.state.details.generation}
                            <Divider></Divider>
                            stat total: {this.state.details.statTotal}
                        </Item.Description>
                    </Item.Content>
                    

                </Item>
            </Fragment>
        )
    }
}

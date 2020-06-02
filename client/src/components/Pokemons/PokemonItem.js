import React, {Fragment} from "react";
import { Button, Item, Divider, Checkbox} from 'semantic-ui-react';
import axios from 'axios';
import defaultImg from '../../assets/image.png';
const baseSpriteAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
export default class PokemonItem extends React.Component {
    state = {
        details: {},
        sprite: defaultImg,
        checked: false
    }

    componentWillMount() {
        this.setState({details: this.props.details});
    }

    componentDidMount() {
    }

    handleDetailsClick = () => {
        this.props.openModalDetails(this.state.details);
    }

    render () {
        const {details, checked} = this.state;
        return (
            <Fragment>
                <Item>
                    <Item.Image size='small' src={`${baseSpriteAPI}/${details.imgNumber}.png`}></Item.Image>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header>{details.name}</Item.Header>
                        <Item.Description>
                            type1: {details.type1}
                            <Divider></Divider>
                            generation: {details.generation}
                            <Divider></Divider>
                            stat total: {details.statTotal}
                        </Item.Description>
                    </Item.Content>

                    <Item.Extra>
                        
                                
                        <Button floated='right' size="small" color="blue" onClick={this.handleDetailsClick}>details</Button>
                            
                
                    </Item.Extra>                    

                </Item>
            </Fragment>
        )
    }
}

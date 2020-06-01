import React, {Fragment} from 'react';
import { Button, Item, Divider, Modal, Grid, Icon} from 'semantic-ui-react';
import PokemonChart from './PokemonChart';
const baseSpriteAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export default class PokemonModal extends React.Component {
    state = {
        details: {}
    };

    componentWillMount() {
        this.setState({
            details: this.props.details
        });
    }

    close = () => {
        console.log('close?')
        this.props.close();
    }

    render () {
        const {details} = this.state;
        

        return (
            <Fragment>
                <Modal.Content image scrolling>
					<Grid padded>
                        <Grid.Row>
                            <Grid.Column key={Math.random()}>
                                <Item.Group>
                                    <Item floated="right">
                                        <Item.Image size='medium' src={`${baseSpriteAPI}/${details.imgNumber}.png`}/>
                             
                                        <Item.Content verticalAlign='bottom'>
                                            <Item.Header>Name:{details.name}</Item.Header>
                                            <PokemonChart
                                                details={details}>
                                            </PokemonChart>
                                        </Item.Content>
                                    </Item>

                                    <Item>
                                        <Item.Content>
                                            <Item.Header>Details</Item.Header>
                                            <Item.Description>
                                                type1: {details.type1}
                                                <Divider></Divider>
                                                type2: {details.type2}
                                                <Divider></Divider>
                                                generation: {details.generation}
                                                <Divider></Divider>
                                                stat total: {details.statTotal}
                                                <Divider></Divider>
                                                evolved: {details.evolved}
                                                <Divider></Divider>
                                                weather1: {details.weather1}
                                                <Divider></Divider>
                                                weather2: {details.weather2}
                                                <Divider></Divider>
                                                legendary: {details.legendary}
                                                <Divider></Divider>
                                            </Item.Description>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                        </Grid.Row>              
					</Grid>
				</Modal.Content>

				<Modal.Actions>
					<Button positive onClick={this.close}>
						Close <Icon name='chevron right' />
					</Button>
				</Modal.Actions>
            </Fragment>
        )
    }
}
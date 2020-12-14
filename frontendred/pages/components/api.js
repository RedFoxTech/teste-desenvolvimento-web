
import React from 'react';
import axios from 'axios';

export default class Api extends React.Component {
    state = {
        product: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/users/`)
            .then(res => {
        
                const product = res.data;

                console.log(product)

                this.setState({ product });

            })
    }

    render() {
        
        return (
            <div >
                {this.state.product.map((items, i) => {
                    return (
                        <>
                            <p key={i}>{items.name}</p>
                            <p key={i}>{items.pokedexnumber}</p>
                            </>
                    )
                })}
            </div>
        );
    }
}

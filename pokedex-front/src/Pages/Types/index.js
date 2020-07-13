import React, { Component } from 'react'; 
import Main from 'Components/main';

export default class Types extends Component{ 
    render (){ 
        return ( 
            <Main>
                <h2> Tipos de pokemon { this.props.match.params.type } </h2>
            </Main>
        )
    }
}
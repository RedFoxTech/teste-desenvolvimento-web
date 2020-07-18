import React, { Component } from 'react'; 

import Forms from './Pokemon/Forms'; 

import { connect } from 'react-redux'; 

class Admin extends Component { 
    componentDidMount() { 
        if(this.props.token === null || this.props.token === undefined){ 
            document.location.href = '/'
        }
    }
    render(){ 
        return (
            <Forms/>
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        token : state.auth.token
    }
}
export default connect(mapStateToProps)(Admin)
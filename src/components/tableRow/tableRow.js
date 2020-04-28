import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './tableRow.css';

const TableRow = (props) => {
    return(
        <>
            <input 
                type="text" 
                value={props.value}
                name={props.name} 
                onChange={(evt) => props.onChangeHandler(evt, props.index)}
            /> 
            {props.src ? 
                <Link to={"/pokedex/"+props.value}>
                    <img 
                        className="pokeIcon" 
                        src={props.src} 
                        alt={props.value}
                        onClick={() => {props.onSendSearch(props.value)}}                  
                    /> 
                </Link>
                : null}
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSendSearch: (searching) => dispatch({type: "START_SEARCH", searchParams: searching})
    }
}

export default connect(null, mapDispatchToProps)(TableRow);
import React from 'react';
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
                <Link to={"/pokemon/"+props.value}>
                    <img 
                        className="pokeIcon" 
                        src={props.src} 
                        alt=""                      
                    /> 
                </Link>
                : null}
        </>
    );
}

export default TableRow;
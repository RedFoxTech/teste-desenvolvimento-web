import React from 'react';
import {Link} from 'react-router-dom';
import './pokeItem.css';


const PokeItem = (props) => {
    return (
        <Link className="m-auto opcao d-flex justify-content-center align-items-center" to={props.link} >
            <div className= "m-auto">
                <img className="w-100" src={props.src} alt={props.link}/>
            </div>
        </Link>
    )
}

export default PokeItem;
import React from 'react';

import './style.css';

function PokeButtons() {
    return(  
        <div className="buttons">
            <button type="button" className="btn btn-warning btn-sm">Editar</button>
            <button type="button" className="btn btn-danger btn-sm">Excluir</button>   
        </div>               
    )
}

export default PokeButtons;
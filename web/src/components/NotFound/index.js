import React from 'react';

import PokeHeader from '../PokeHeader';

function NotFound () {
    return (
        <>
            <PokeHeader />
            <div className="d-flex justify-content-center mt-5">
                <h1>Página não encontrada!!</h1>    
            </div>
        </>
    )
}

export default NotFound;
import React, { useState } from 'react';
import Header from '../PokeHeader';
import axios from 'axios';

function PokeAdd() {

    const [ name, setName ] = useState('');    

    async function postDataAxios(event) {
        event.preventDefault();
        const res = await axios.post("http://localhost:3333/pokemons");
        console.log(res);
    }

    
    
    
    return (
        <>
            <Header title="RedFox Pokemon" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={postDataAxios} className="my-4">
                            <input value={name} onChange={event => setName(event.target.value)} type="text" className="form-control" id="" />
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>           
        </>
    )


}

export default PokeAdd;
import React from "react";

export default props => {
    let lista = props.list || [];

    return (
        <div className="container">
            <div className="row">
                {lista.map(pokemon => (
                    <div className="col-lg-3 col-sm-12">
                        <div
                            className="card"
                            style={{ width: "18rem;" }}
                            key={pokemon._id}
                        >
                            <img
                                className="custom-image"
                                src={pokemon.img}
                                alt="Pokemon Image"
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                                <p className="card-text">Atk: {pokemon.atk}</p>
                                <p className="card-text">Def: {pokemon.def}</p>
                                <a href="#" className="btn btn-primary">
                                    Visualizar Pokemon
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

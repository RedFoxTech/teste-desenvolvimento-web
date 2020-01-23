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
                                <div className="d-flex">
                                    <a
                                        href=""
                                        data-toggle="modal"
                                        data-target="#modalUpdate"
                                        className="btn btn-primary"
                                        onClick={() =>
                                            props.updatePokemonAtual(pokemon)
                                        }
                                    >
                                        Editar Pokemon
                                    </a>
                                    <button
                                        className="btn btn-danger fa fa-trash-o"
                                        onClick={() =>
                                            props.onDelete(pokemon._id)
                                        }
                                    ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

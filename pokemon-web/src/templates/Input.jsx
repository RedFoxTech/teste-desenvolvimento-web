import React from "react";

export default props => {
    return (
        <div>
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" />
                <button
                    className="btn btn-primary fa fa-search"
                    title="pesquisar"
                />
                <button
                    className="btn btn-danger fa fa-plus"
                    title="Cadastrar pokemon"
                    data-toggle="modal"
                    data-target="#modalCadastro"
                ></button>
            </div>
        </div>
    );
};

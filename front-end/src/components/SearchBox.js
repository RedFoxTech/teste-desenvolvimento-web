import React from 'react';

const searchBox = (props) => {
  return (
    <div className="SearchBox mx-auto">
      <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Nome do Pokemon" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Procurar</button>
        </div>
      </div>
    </div>
  )
};

export default searchBox;
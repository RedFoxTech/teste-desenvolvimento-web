import React from 'react';

const searchBox = (props) => {

  return (
    <div className="SearchBox mx-auto">
      <form onSubmit={props.submit}>
        <div className="input-group mt-3">
          <input type="text" className="form-control" placeholder="Nome do Pokemon" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.value} onChange={props.changed} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Procurar</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default searchBox;
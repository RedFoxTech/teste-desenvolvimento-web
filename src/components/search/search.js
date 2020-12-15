import React, {Component} from 'react';

class SearchPokemons extends Component {
    
    render(){
        return(
            <div class="card">
            <div class="card-body">
                <form>
                    <h4>Pesquisar</h4>
                    <div className="row mb-2">
                        <div className="col-md-3 col-sm-6">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control" id="name" name="name" />
                        </div>
                        
                        <div className="col-md-3 col-sm-6">
                            <label htmlFor="name">Tipo</label>
                            <input type="text" className="form-control" id="type1" name="type1"/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
            </div>
            </div>
        )
    }
}

export default SearchPokemons;

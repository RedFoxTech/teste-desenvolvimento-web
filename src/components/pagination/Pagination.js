import React from 'react';

const Pagination = ({pokemonsPorPagina, totalDePokemons, paginaAtual, CarregarPagina }) => {
    // define a quantidade de paginas que será exibida
    const numeroDePaginas = [];

    for(let i=1; i <= Math.ceil(totalDePokemons / pokemonsPorPagina); i++){
        numeroDePaginas.push(i);
    }

    function linkAtivo(numero){
        if(parseInt(numero) == parseInt(paginaAtual)){
            return "active"
        }
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {numeroDePaginas.map(numero => (
                    <li key={numero} className={`page-item ${linkAtivo(numero)}`}>
                        <a onClick={ () => CarregarPagina(numero) } href="#" className='page-link'>
                            {numero}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
import React, { useEffect, useState, MouseEvent} from 'react';
import { Navbar, Button, Form, Figure } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/pokeball.svg';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


const Home = () => {
    const history = useHistory();
    interface Pokemon {
        id: number,
        name: string,
        pokedex_number: number,
        image: string,
        generation: number,
        evolution_stage: number,
        family_id: number,
        atk: number,
        def: number,
        sta: number,
        max_cp_at_40: number,
        max_cp_at_39: number,
        type1: number,
        type2: number,
        weather1: number,
        weather2: number,
        image_type1: string,
        name_type1: string,
        image_type2: string,
        name_type2: string,
        image_url: string,
        image_url_type1: string,
        image_url_type2: string,
        image_url_weather1: string,
        image_url_weather2: string
    }


    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pages, setPage] = useState<number>(1);
    const [filters, setFilter] = useState<string>('');
    const rows = 9;
    useEffect(() => {
        api.get(`pokemons?filter=${filters}&pages=${pages}&rows=${rows}`).then(response => {
            console.log(response.data);
            setPokemons(response.data);
        })
    }, []);

    let aux = 0;

    async function nextPage() {
        const page = pages + 1;
        await api.get(`pokemons?filter=${filters}&pages=${page}&rows=${rows}`).then(response => {
            if (response.data[0] === undefined)
                return aux = 1;
            setPokemons(response.data);
            aux = 0;
        });
        if (aux === 1)
            return;
        setPage(pages + 1);
    }

    async function previousPage() {
        if (pages === 1)
            return;
        const page = pages - 1;
        setPage(pages - 1);
        console.log(pages);
        api.get(`pokemons?filter=${filters}&pages=${page}&rows=${rows}`).then(response => {
            console.log(response.data);
            setPokemons(response.data);
        });
    }

    async function handleDeletePokemon(event: MouseEvent<HTMLButtonElement>) {
        const id = Number(event.currentTarget.value);
        console.log(id);
        try {
            await api.delete(`pokemons/${id}`);
            setPokemons(pokemons.filter(pokemon => pokemon.id !== id));
        } catch (err) {
            alert('Error in delete!');
        }

    }

    async function handleUpdatePokemon(event: MouseEvent<HTMLButtonElement>) {
        const id = event.currentTarget.value;
        localStorage.clear();
        localStorage.setItem('pokemon_id', id);
        history.push('/update-pokemon');

    }

    async function handleSearchPokemon(event: React.ChangeEvent<HTMLInputElement>) {
        const filter = String(event.currentTarget.value);
        let page0 = 1;
        setPage(1);

        setFilter(filter);
        api.get(`pokemons?filter=${filter}&pages=${page0}&rows=${rows}`).then(response => {
            console.log(response.data);
            setPokemons(response.data);
        });
        console.log(filters);
    }

    return (
        <div id="pokemon-profile">
            <Navbar bg="dark">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/create-pokemon">
                        <Button >Cadastrar Pokemon </Button>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
            <Form.Control className="txtSearch" type="text" placeholder="Digite o Pokemon para pesquisa!" onChange={handleSearchPokemon} />
            <div className="pokemon-container">
                <ul>
                    {
                        pokemons.map(pokemon => (


                            <li key={pokemon.id}>
                                <ul>
                                    <li>
                                        <strong>Nome</strong>
                                        <p>{pokemon.name}</p>
                                        <strong>Generation</strong>
                                        <p>{pokemon.generation}</p>
                                        <strong>Family ID</strong>
                                        <p>{pokemon.family_id}</p>
                                        <strong>Evolution Stage</strong>
                                        <p>{pokemon.evolution_stage}</p>
                                        <strong>Cp 100% @ 40</strong>
                                        <p>{pokemon.max_cp_at_40}</p>
                                        <strong>Cp 100% @ 39</strong>
                                        <p>{pokemon.max_cp_at_39}</p>
                                    </li>
                                    <li style={{ width: 250, height: 300 }}>
                                        <Figure.Image
                                            width={250}
                                            height={300}
                                            src={pokemon.image_url}
                                            style={{ background: "#cefcb1", borderRadius: 5 }}
                                        />
                                        <strong>Pokedex Number: {pokemon.pokedex_number}</strong>
                                        <strong>Types:</strong>
                                        <ul>
                                            <li style={{ height: 50, marginTop: -25, background: "transparent", marginBottom: 25 }}>
                                                <Figure.Image
                                                    width={50}
                                                    height={50}
                                                    src={pokemon.image_url_type1}
                                                    style={{ background: "#dedede", borderRadius: 5 }}
                                                />
                                            </li>
                                            <li style={{ height: 50, marginTop: -25, background: "transparent" }}>
                                                <Figure.Image
                                                    width={50}
                                                    height={50}
                                                    src={pokemon.image_url_type2}
                                                    style={{ background: "#dedede", borderRadius: 5 }}
                                                />
                                            </li>
                                        </ul>
                                        <strong>Weather:</strong>
                                        <ul>
                                            <li style={{ height: 50, marginTop: -25, background: "transparent", marginBottom: 25 }}>
                                                <Figure.Image
                                                    width={50}
                                                    height={50}
                                                    src={pokemon.image_url_weather1}
                                                    style={{ background: "#dedede", borderRadius: 5 }}
                                                />
                                            </li>
                                            <li style={{ height: 50, marginTop: -25, background: "transparent", marginBottom: 25 }}>
                                                <Figure.Image
                                                    width={50}
                                                    height={50}
                                                    src={pokemon.image_url_weather2}
                                                    style={{ background: "#dedede", borderRadius: 5 }}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>


                                <ul className="Stats">
                                    <li style={{ background: "#85d17b" }}>
                                        <strong>ATK</strong>
                                        <p className="ATK">{pokemon.atk}</p>
                                    </li>
                                    <li style={{ background: "#7bc7d1" }}>
                                        <strong>DEF</strong>
                                        <p>{pokemon.def}</p>
                                    </li>
                                    <li style={{ background: "#d17b7b" }}>
                                        <strong>STA</strong>
                                        <p>{pokemon.sta}</p>
                                    </li>
                                    <li style={{ background: "#e6ed5c" }}>
                                        <strong>STAT TOTAL</strong>
                                        <p>{pokemon.atk + pokemon.def + pokemon.sta}</p>
                                    </li>
                                </ul>
                                <ul className="bottom-buttons">
                                    <li className="bottom-del">
                                        <button type="submit" className="deletebutton" onClick={handleDeletePokemon} value={pokemon.id}>Delete</button>
                                    </li>
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="navigationbar">
                <ul className="navigation">
                    <li>
                        <button type="submit" className="previousButton" onClick={previousPage}>
                            <FiArrowLeft />
                        </button>
                    </li>
                    <li>
                        <button type="submit" className="nextButton" onClick={nextPage} >
                            <FiArrowRight />
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Home;
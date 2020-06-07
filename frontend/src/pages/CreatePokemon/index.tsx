import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Navbar, Button, Form, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/pokeball.svg';
import api from '../../services/api';
import './styles.css';
import Dropzone from '../../components/Dropzone';

const CreatePokemon = () => {
    const history = useHistory();

    interface Type {
        id: number,
        name: string,
        image: string
    }
    interface Weather {
        id: number,
        name: string,
        image: string
    }

    const [selectedFile, setSelectedFile] = useState<File>();

    const [types, setType] = useState<Type[]>([]);
    const [types2, setType2] = useState<Type[]>([]);
    const [typevoid] = useState<Type[]>([]);


    const [weathers, setWeather] = useState<Weather[]>([]);
    const [weathers2, setWeather2] = useState<Weather[]>([]);
    const [weathervoid] = useState<Weather[]>([]);

    const [selectedType1, setSelectedType1] = useState<number>(0);
    const [selectedType2, setSelectedType2] = useState<number>(0);

    const [selectedWeather1, setSelectedWeather1] = useState<number>(0);
    const [selectedWeather2, setSelectedWeather2] = useState<number>(0);

    const [formData, setFormData] = useState({
        name: '',
        pokedex_number: 0,
        image: '',
        generation: 0,
        evolution_stage: 0,
        family_id: 0,
        atk: 0,
        def: 0,
        sta: 0,
        max_cp_at_40: 0,
        max_cp_at_39: 0
    });

    useEffect(() => {
        api.get('http://localhost:3333/types').then(response => {
            setType(response.data);
        })
    }, []);

    useEffect(() => {
        api.get('http://localhost:3333/weather').then(response => {
            setWeather(response.data);
        })
    }, []);

    useEffect(() => {
        if (selectedType1 == null)
            return;
        if (selectedType1 == 0) {
            setType2(typevoid);
            setSelectedType2(0);
            return;
        }
        api.get('http://localhost:3333/types').then(response => {
            setType2(types.filter(
                type => type.id !== selectedType1
            ));
        })
    }, [selectedType1]);

    useEffect(() => {
        if (selectedWeather1 == null)
            return;
        if (selectedWeather1 == 0) {
            setWeather2(weathervoid);
            setSelectedWeather2(0);
            return;
        }
        api.get('http://localhost:3333/weather').then(response => {
            setWeather2(weathers.filter(
                weather => weather.id !== selectedWeather1
            ));
        })
    }, [selectedWeather1]);

    function handleSelectedType1(event: ChangeEvent<HTMLSelectElement>) {
        const type = Number(event.target.value);

        setSelectedType1(type);
    }

    function handleSelectedType2(event: ChangeEvent<HTMLSelectElement>) {
        const type = Number(event.target.value);

        setSelectedType2(type);
    }

    function handleSelectedWeather1(event: ChangeEvent<HTMLSelectElement>) {
        const weather = Number(event.target.value);

        setSelectedWeather1(weather);
    }

    function handleSelectedWeather2(event: ChangeEvent<HTMLSelectElement>) {
        const weather = Number(event.target.value);

        setSelectedWeather2(weather);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        );
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log(selectedFile);

        const { name, pokedex_number, image, generation, evolution_stage, family_id, atk,
            def, sta, max_cp_at_40, max_cp_at_39
        } = formData;
        const type1 = selectedType1;
        const type2 = selectedType2;
        const weather1 = selectedWeather1;
        const weather2 = selectedWeather2;

        let type2_null;
        let weather2_null;

        if (type2 == 0) {
            type2_null = null;
        } else {
            type2_null = type2;
        }

        if (weather2 == 0) {
            weather2_null = null;
        } else {
            weather2_null = weathers2;
        }


        const data = new FormData();
        data.append('name', name);
        data.append('pokedex_number', String(pokedex_number));
        data.append('generation', String(generation));
        data.append('evolution_stage', String(evolution_stage));
        data.append('family_id', String(family_id));
        data.append('atk', String(atk));
        data.append('def', String(def));
        data.append('sta', String(sta));
        data.append('max_cp_at_40', String(max_cp_at_40));
        data.append('max_cp_at_39', String(max_cp_at_39));
        data.append('type1', String(type1));
        data.append('type2', String(type2_null));
        data.append('weather1', String(weather1));
        data.append('weather2', String(weather2_null));

        if (selectedFile)
            data.append('image', selectedFile);

        await api.post('create-pokemon', data);
        alert('Pokemon Criado com sucesso');
        history.push('/');

    }

    return (
        <div id="create-pokemon">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />

                </Navbar.Brand>
                <Navbar.Text style={{ fontSize: '20px' }}>
                    Cadastrar Pokemon
                    </Navbar.Text>
                <Navbar.Collapse className="justify-content-end">

                    <Link to="/">
                        <Button >Voltar</Button>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
            <div className="containerCreate">
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="formG">
                        <Col xs={9}>
                            <Form.Label>Nome do Pokemon</Form.Label>
                            <Form.Control name="name" as="input" onChange={handleInputChange} placeholder="Digite o nome do Pokemon" required />
                        </Col>
                        <Col>
                            <Form.Label>Pokedex Number</Form.Label>
                            <Form.Control name="pokedex_number" as="input" onChange={handleInputChange} type="number" placeholder="Digite o numero da Pokedex" required />
                        </Col>
                    </Form.Row>

                    <Form.Row className="formG">
                        <Col>
                            <Form.Label>Número da Geração</Form.Label>
                            <Form.Control name="generation" as="input" onChange={handleInputChange} type="number" placeholder="Número da Geração" required />
                        </Col>
                        <Col>
                            <Form.Label>Family ID</Form.Label>
                            <Form.Control name="family_id" as="input" onChange={handleInputChange} type="number" placeholder="Family ID" required />
                        </Col>
                        <Col >
                            <Form.Label>Evolution Stage</Form.Label>
                            <Form.Control name="evolution_stage" as="input" onChange={handleInputChange} type="number" placeholder="Evolution Stage" required />
                        </Col>
                    </Form.Row>

                    <Form.Row className="formG">
                        <Col xs={3}>
                            <Form.Label>CP 100% at 40</Form.Label>
                            <Form.Control name="max_cp_at_40" as="input" onChange={handleInputChange} type="number" placeholder="CP 100% at 40" required />
                        </Col>
                        <Col xs={3}>
                            <Form.Label>CP 100% at 39</Form.Label>
                            <Form.Control name="max_cp_at_39" as="input" onChange={handleInputChange} type="number" placeholder="CP 100% at 39" required />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col xs={3}>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Type 1</Form.Label>
                                <Form.Control onChange={handleSelectedType1} as="select" defaultValue="Type 1" required>
                                    <option value="">Type 1</option>
                                    {
                                        types.map(
                                            type => (
                                                <option key={type.id} value={type.id} >{type.name}</option>
                                            )
                                        )
                                    }

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Type 2</Form.Label>
                                <Form.Control onChange={handleSelectedType2} as="select" defaultValue="Type 2" >
                                    <option value={0}>Type 2</option>
                                    {
                                        types2.map(
                                            type => (
                                                <option key={type.id} value={type.id} >{type.name}</option>
                                            )
                                        )
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Weather 1</Form.Label>
                                <Form.Control onChange={handleSelectedWeather1} as="select" defaultValue="Weather 1" required>
                                    <option value="">Weather 1</option>
                                    {
                                        weathers.map(
                                            weather => (
                                                <option key={weather.id} value={weather.id} >{weather.name}</option>
                                            )
                                        )
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Weather 2</Form.Label>
                                <Form.Control onChange={handleSelectedWeather2} as="select" defaultValue="Weather 2" >
                                    <option value={0}>Weather 2</option>
                                    {
                                        weathers2.map(
                                            weather => (
                                                <option key={weather.id} value={weather.id} >{weather.name}</option>
                                            )
                                        )
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Row className="Stats formG">

                        <input name="atk" type="number" onChange={handleInputChange} placeholder="ATK" className="ATK" required></input>

                        <input name="def" type="number" onChange={handleInputChange} placeholder="DEF" className="DEF" required></input>

                        <input name="sta" type="number" onChange={handleInputChange} placeholder="STA" className="STA" required></input>

                    </Form.Row>

                    <Form.Row className="formG">

                        <Dropzone onFileUploaded={setSelectedFile} />

                    </Form.Row>


                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    );
}

export default CreatePokemon;
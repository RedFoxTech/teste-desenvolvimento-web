import Header from './Header'
import axios from 'axios'

import { FiArrowLeft} from 'react-icons/fi'

import { Container} from 'react-bootstrap'

import {useState} from 'react'

function NewPokemon() {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

        axios.post('https://apitestepoke.herokuapp.com/pokemon', {
            name: name,
            type: type,
            description: description,
            image: image
        }).then(res => {
            console.log(res)
            if(res.status === 200) {
                window.location.href="/"
            }
        })
    }
    

    return (
        <>
            <Header logo="pokedex" item={ <FiArrowLeft size={18} color="white"/>} link="/"  />
            <Container>
                <form style={{marginTop: '20px'}} onSubmit={handleSubmit}> 
                    <fieldset>
                        <div className="form-group">
                            <label>Nome do pokemon</label>
                            <input type="text" className="form-control" placeholder="Pokemon" onChange={(e) => setName(e.target.value)}  name="name" value={name} />
                        </div>
                        <div className="form-group">
                            <label>Tipo do pokemon</label>
                            <input type="text" className="form-control" placeholder="Tipo" onChange={(e) => setType(e.target.value)}  name="type" value={type} />
                        </div>
                        <div className="form-group">
                            <label>Imagem do pokemon</label>
                            <input type="text" className="form-control" placeholder="Imagem" onChange={(e) => setImage(e.target.value)}  name="image" value={image} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea">Descrição do pokemon</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3" onChange={(e) => setDescription(e.target.value)}  name="description" value={description} ></textarea>
                        </div>
                        <button className="btn btn-primary">Listar pokemon</button>
                    </fieldset>
                </form>

            </Container>
        </>
    )
}


export default NewPokemon
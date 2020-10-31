import Header from './Header'

import axios from 'axios'

import { Container} from 'react-bootstrap'
import { FiArrowLeft} from 'react-icons/fi'

import { useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Edit() {

    const {id} = useParams()

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [ide, setIde] = useState('')

    

    useEffect(() => {
        function getPokemon() {
            axios.get(`http://localhost:8080/pokemon/${id}`).then(pokemon => {
                const data = pokemon.data

              setName(data.name)
              setType(data.type)
              setDescription(data.description)
              setImage(data.image)
        })
            
        }

        getPokemon()
    },[id])


    function editPokemon(e) {
        e.preventDefault()
        axios.put(`http://localhost:8080/pokemon/${id}`, {
            name: name,
            type: type,
            description: description,
            image: image
        }).then(res => {
           console.log(res)

           window.location.href = "/"

        })
    }

    return(
        <>
        <Header logo="editar" item={ <FiArrowLeft size={18} color="white"/>} link="/" />
        <Container>
            <form style={{marginTop: '20px'}} onSubmit={editPokemon}> 
                <fieldset>
                    <input onChange={(e) => setIde(e.target.value)}  name="id" value={ide}  type="hidden"/>
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
                    <button className="btn btn-primary">editar pokemon</button>
                </fieldset>
            </form>
        </Container>
    </>
    )
}

export default Edit
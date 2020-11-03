import React, { useState, useEffect} from 'react'

function AddPokemon({ onSubmit }){
    const [github_username, setGithubUsername] = useState('')
	const [techs, setTechs] = useState('')
	
	const [latitude, setLatitude] = useState('')
    const [longitude, setlongitude] = useState('')
    
    async function handleSubmit(e){
        e.preventDefault()

        await onSubmit({
			github_username,
			techs,
			latitude,
			longitude
        })

        setGithubUsername('')
		setTechs('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-block'>
                <label htmlFor='github_username'>Usuario do Github</label>
                <input 
                    autoComplete={false}
                    name='github_username' 
                    id='github_username' 
                    required
                    value={github_username}
                    onChange={ e => setGithubUsername(e.target.value)} 
                />
            </div>
            
            <div className='input-block'>
                <label htmlFor='techs'>Tecnologias</label>
                <input 
                    name='techs' 
                    id='techs' 
                    required
                    value={techs}
                    onChange={ e => setTechs(e.target.value)} 
                />
            </div>
            <div className='input-group'>
                <div className='input-block'>
                    <label htmlFor='latitude'>Latitude</label>
                    <input 
                        type='number' 
                        name='latitude' 
                        id='latitude' 
                        required 
                        value={latitude}
                        onChange={ e => setLatitude(e.target.value)}
                    />
                </div>

                <div className='input-block'>
                    <label htmlFor='longitude'>Longitude</label>
                    <input 
                        type='number' 
                        name='longitude' 
                        id='longitude' 
                        required 
                        value={longitude}
                        onChange={ e => setlongitude(e.target.value)}
                    />
                </div>
            </div>
            <button type='submit'>Salvar</button>
        </form>
    )
}

export default AddPokemon
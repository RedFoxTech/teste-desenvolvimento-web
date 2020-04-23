import React, { useState, useEffect } from 'react'

const PokemonInfoCell = (props) => {
    let [fieldValue, changeFieldValue] = useState(props.value)
    let [isEditing, changeEditing] = useState(false)

    useEffect(() => {
        changeFieldValue(props.value)
    }, [props.value])

    let fieldObj
    if (isEditing && props.isEditable)
        fieldObj = <input name="InfoCell" value={fieldValue} onChange={event => { changeFieldValue(event.target.value) } } onBlur={()=>{
            changeEditing(!isEditing)
            props.onChangeFieldValue(fieldValue)
        }} autoFocus type="text" />
    else
        fieldObj = <p>{props.value}</p>

    return <div>
        <button onClick={()=>changeEditing(!isEditing)} className={`flat-btn ${props.cellColor}`} >
            {fieldObj}
        </button>
    </div>
}

export default PokemonInfoCell
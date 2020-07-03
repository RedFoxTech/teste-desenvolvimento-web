import React from 'react'
import {Card as BootstrapCard} from 'react-bootstrap'
import './style.css'
import Edit from '../Icons/Edit'
import Delete from '../Icons/Trash'

export default function Card({img, alt, pokedexNumber, name, type1, type2, onClick, editFunc, deleteFunc}) {
  return (
    <BootstrapCard className={`pokemon justify-content-center align-items-center pokemon__${type1}`}>
      <div className="fit-pokemon">
        <div className="pokemon__info" onClick={onClick}>
          <img className="pokemon__info__img" src={img} alt={alt}/>
          <div className="pokemon__info__id">
            <p className="pokemon__info__id__name">{("000" + pokedexNumber).slice(-3)} - {name}</p>
          </div>
          <p className={`pokemon__info__type1 pokemon__info__type1--${type1}`}>{type1}</p>
          <p className={`pokemon__info__type2 pokemon__info__type2--${type2}`}>{type2}</p>
        </div>
        <div className="pokemon__actions">
          <Edit className={"pokemon__actions__edit"} onClick={editFunc}/>
          <Delete className="pokemon__actions__delete" onClick={deleteFunc}/>
        </div>
      </div>
    </BootstrapCard>
  )
}

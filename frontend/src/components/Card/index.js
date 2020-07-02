import React from 'react'
import {Card as BootstrapCard} from 'react-bootstrap'
import './style.css'
export default function Card({img, alt, pokedexNumber, name, type1, type2, onClick}) {
  return (
    <BootstrapCard onClick={onClick} className={`pokemon justify-content-center align-items-center pokemon__${type1}`}>
      <img className="pokemon__img" src={img} alt={alt}/>
      <p>{("000" + pokedexNumber).slice(-3)}</p>
      <p>{name}</p>
      <p>{type1}</p>
      <p>{type2}</p>
    </BootstrapCard>
  )
}

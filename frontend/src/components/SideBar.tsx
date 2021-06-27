import React, { useContext } from 'react'
import { RequestContextData } from '../RequestContext'

interface TypesProps {
  types: string[];
}


export function Sidebar({ types }:TypesProps) {
  const {setValue, value, setIndexPokemon} = useContext(RequestContextData)

  const onClickEvent = (event) => {
    setValue(event.currentTarget.value)
     setIndexPokemon(10)
  }

  return (



    <div className="bg-white flex-col flex-2 sticky overflow-auto top-0 items-center flex h-screen p-2.5 w-28 ">
      <button
        className={`btn ${value == 'All' && "all-active"}`}
        onClick={event => onClickEvent(event)}
        value="All"
      >
        All
      </button>
      {types.map(type => (
        
        <button
          onClick={event => onClickEvent(event)}
          value={type}
          key={type}
          className={`btn ${type} ${
            value === type ? `${type}-active` : undefined
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  )
}

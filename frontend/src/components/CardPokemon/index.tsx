import {
  Card,
  Img,
  UlInfo,
  Name,
  NumberPokedex,
  UlAtribuites,
  LiAtk,
  LiDef,
  Type
}from './style';

interface ICardPokemon{
  id: string,
  url_img_pokemon: string,
  name: string,
  pokedex_number:string,
  atk: string,
  def: string,
  type_one: string,
  type_two: string
}

function  CardPokemon({id, url_img_pokemon, name, pokedex_number, atk, def, type_one, type_two}:ICardPokemon){
  return (
    <Card 
      href={`/single/${id}`}
    >
      <Img
        url_img_pokemon={url_img_pokemon}
      />
      <UlInfo>
        <Name>
          {name}
        </Name>
        <NumberPokedex>
          Nº{pokedex_number}
        </NumberPokedex>
      </UlInfo>
      <UlAtribuites>
        <LiAtk>
          Atk: {atk}
        </LiAtk>
        <LiDef>
          Def: {def}
        </LiDef>
      </UlAtribuites>
      <UlAtribuites>
        <Type>
          {type_one}
        </Type>
        <Type>
          {type_two}
        </Type>
      </UlAtribuites>
    </Card>
  )
}

export { CardPokemon }
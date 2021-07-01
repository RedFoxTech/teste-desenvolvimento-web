import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: false
  }
})
export class Pokemon extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Pokemon>) {
    super(data);
  }
}

export interface PokemonRelations {
  // describe navigational properties here
}

export type PokemonWithRelations = Pokemon & PokemonRelations;

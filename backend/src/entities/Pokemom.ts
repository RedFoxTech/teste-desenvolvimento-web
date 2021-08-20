import { 
  Column, 
  Entity, 
  PrimaryColumn, 
  CreateDateColumn, 
  UpdateDateColumn
} from 'typeorm'

import { v4 as uuid} from 'uuid';
export type Type_one = '' | 'grass' | 'fire' | 'water' | 'bug' | 'normal' | 'poison' | 'electric' | 'ground' | 'fairy' | 'fighting' | 'psychic' | 'rock' | 'ghost' | 'ice' | 'dragon' | 'dark' | 'steel';
export type Type_two = '' | 'grass' | 'fire' | 'water' | 'bug' | 'normal' | 'poison' | 'electric' | 'ground' | 'fairy' | 'fighting' | 'psychic' | 'rock' | 'ghost' | 'ice' | 'dragon' | 'dark' | 'steel';
export type Weather_one = 'Sunny/clear' | 'Rainy' | 'Partly cloudy' | 'Cloudy' | 'Windy' | 'Fog' | 'Snow';
export type Weather_two = 'Sunny/clear' | 'Rainy' | 'Partly cloudy' | 'Cloudy' | 'Windy' | 'Fog' | 'Snow';

@Entity('pokemons')
class Pokemom {

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name:string;

  @Column()
  pokedex_number:number;

  @Column()
  img_name:string;

  @Column()
  generation:number;

  @Column()
  evolution_stage:string;

  @Column()
  evolved:number;

  @Column()
  family_id:number;  

  @Column()
  cross_gen:number;  

  @Column()
  type_one:Type_one; 
  
  @Column()
  type_two: Type_two;
  
  @Column()
  weather_one: Weather_one;

  @Column()
  weather_two: Weather_two;

  @Column()
  stat_total:number;

  @Column()
  atk:number;

  @Column()
  def:number;

  @Column()
  sta:number;

  @Column()
  legendary:number;

  @Column()
  aquireable:number;

  @Column()
  spawns:number;

  @Column()
  regional:number;

  @Column()
  raidable:number;

  @Column()
  hatchable:number;

  @Column()
  shiny:number;

  @Column()
  nest:number;

  @Column()
  new:number;

  @Column()
  not_gettable:number;

  @Column()
  future_evolve:number;

  @Column()
  cp_100_40:number;

  @Column()
  cp_100_39:number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
  
  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Pokemom };